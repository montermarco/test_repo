const { promisify } = require('util');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');


//creating the token with an id
const signToken = id => {
     return jwt.sign({id}, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    })
};

// sending token through cookies for security
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  
  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),    
    httpOnly: true
  };

  if(process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  //remove the password from the output, this because we have it as select:false
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user: user
    }
  });
};



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// SIGNUP
exports.signup = catchAsync( async (req, res, next) => {
  // never use req.body here, just allow data regarding the user creation
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangeAt: req.body.passwordChangeAt    
  });

  /* 
  // we create a token with user id
  const token = signToken(newUser._id);
  
  // send token to client ( front )
  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser
    }
  });
  */

  // this function replace lines 45 to 52, we do this in all authController functions so we better create a function for it
  createSendToken(newUser, 201, res);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// LOGIN
exports.login = catchAsync( async(req, res, next) => {
  const {email, password} = req.body;
  
  // 1  check if email and password exist
  if(!email || !password){
    return next(new AppError('Por favor ingresa correo y contraseña', 404));
  }

  // 2 check if user exist and password is correct
  // getting the user, User.findOne({ email: email }) as the key and values are the same we can omit the value
  // select('+password'), the '+' is to read the password that has select:false in the model
  const user = await User.findOne({ email }).select('+password');

  // here we use the method created in the model!
  if(!user || !( await user.correctPassword(password, user.password))){
    return next( new AppError('email o contraseña incorrecta', 401));
  }

  // if everythhin ok send token to client
  createSendToken(user, 200, res);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// MIDDLEWARE PROTECTED ROUTES  set filters to let the user in ...
exports.protect = catchAsync( async(req, res, next) => {
  
  // 1 get the token & check if exist
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    token = req.headers.authorization.split(' ')[1]; // we split it to create an array and take the 1 index which is the token, que trucazo no?
  };
  
  if(!token){
    return next(new AppError('Por favor ingresa en tu cuenta para tener acceso', 401));
  }
  
  // 2 validate the token jwt will do the verification
  // we promisify so we can use async await and we don't break our controller patron 
  // decoded = { id: '5ed4029a9ce6962e68254bc0', iat: 1590952603, exp: 1593544603 }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  
  // 3 check if user exist
  const freshUser = await User.findById(decoded.id);
  if(!freshUser){
    return next(new AppError('El usuario de este token ya no existe ...', 401));
  }

  //check if the user has changed the password after token was issued
   if (freshUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppError('El usuario recien cambio la contraseña, ingresa de nuevo ...', 401)
    );
  }
  
  // if everything ok => GRANT ACCESS protected routes
  req.user = freshUser;
  
  next();// this will be the acces to the protected route if all the verifications are ok
});


// MIDDLEWARE TO RESTRICT ACCESS ACCORDING TO ROLES
// we rae wraping the middleware in a function so we can pass arguments
// roles is an array, so if the user role is not in the array we return an error
exports.restrictTo = ( ...roles ) => {
  return (req, res, next) => {
    if(!roles.includes(req.user.role)) {
      return next( new AppError('No tiene permisos para realizar esta acción, contacte al administrador ...', 403));
    }
    next();
  };
};

// MIDDLEWARES TO RESET PASSWORD

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1 get user based on posted email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('El correo no esta registrado ...', 404));
  }
  // 2 generate random reset token
  
  const resetToken = user.createPasswordResetToken();
  // validateBeforeSave turns off the validation
  await user.save({ validateBeforeSave: false });
  
  // 3 send it to user email
  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Olvidaste tu contraseña? ... Puedes cambiar tu contraseña en el siguiente link: ${resetURL}.\n Si no solicitaste cambiar tu contraseña por favor ignora este correo.`;

 //  acctually sending the email

 try {
  await sendEmail({
    email: user.email,
    subject: 'Actualización de contraseña ( Token expira en 10 min... )',
    message
  });
  res.status(200).json({
    status: 'Success',
    message: 'Token enviado al correo electrónico'
  });
} catch (error) {
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save({ validateBeforeSave: false });

  return next(
    new AppError('Hubo un error al enviar el correo, por favor intenta mas tarde ...'),500);
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1 get user based on token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });

  // 2 if token has not expired, and there is user, set the nre password
  if (!user) {
    return next(new AppError('El token es invalido o ha expirado', 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  //3 Uodate changePasswordAt property for user, this is done in model


  //4 Log the user in and send JWT
  createSendToken(user, 200, res);
});

// UPDATE CURRENT PASSWORD 
exports.updatePassword = catchAsync(async (req, res, next) => {
  // get user from collection
  const user = await User.findById(req.user.id).select('+password');
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('La contraseña que ingresaste no coincide con la contraseña actual'), 401);
  }
  //check if posted password is correct, this is done back in the model
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  //if so update password, and this is done in the model

  //log user sending JWT
  createSendToken(user, 200, res);
});
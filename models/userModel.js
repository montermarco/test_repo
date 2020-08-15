const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor indica tu nombre']
  },
  email:{
    type: String,
    required: [true, 'Por favor indica tu correo'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Por favor ingreasa un correo valido'] 
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'staff', 'sales', 'admin' ],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Por favor ingresa una contraseña'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Por favor confirma tu contraseña'],
    validate: {
      // this only works on save
      validator: function(el){
        return el === this.password;
      },
      message: 'Las conreaseñas no coinciden'
    }
  },
  passwordChangeAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

// Document middleware from mongoose 'pre-save' runs between the moment we receive the data and the moment we save it
// here we do the password validation 

userSchema.pre('save', async function(next) { // we use next to get to the next middleware
  // this functions is for when the password is actually modified
  if (!this.isModified('password')) return next();
  // hash password with cost of 12 (encryption)
  this.password = await bcrypt.hash(this.password, 12);
  // Delete passwordConfirm field, was used only for helping the user to set a password, we don't need it in thd DB
  this.passwordConfirm = undefined;
  next();
});

// changing changeAt time stamp middleware when changing passwords
userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangeAt = Date.now() - 1000; // - 1000 to ensure the token is created after the password has been changed
  next();
});


//instance method query middleware to filter by active users
userSchema.pre(/^find/, function(next) {
  //this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

// MONGOOSE INSTANCE METHOD ... is gonna be available in all documents of users collections
// in document middleware 'this' points to the document, but password is select:true, so is not available, we need to pass the password as well instead of this.password
// we are gonna use this authController, it is available in all user docs ... user.correctPassword()...
userSchema.methods.correctPassword = async function(passwordToConfirm, userPassword){
  return await bcrypt.compare(passwordToConfirm, userPassword) // this return true || false
}


// INSTANCE METHOD
// date format mongo vs jwt = 2020-05-31T00:00:00.000Z vs 1590969536
// if the user change the password after the token was issued
userSchema.methods.changePasswordAfter = function(JWTTimestamp) {
  if(this.passwordChangeAt) {
   const changedTimeStamp = parseInt(this.passwordChangeAt.getTime() / 1000,10);    
    return JWTTimestamp < changedTimeStamp
  }
  return false;// false mneans not changed 
}

userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 10000;  
  return resetToken;
};


const User = mongoose.model('User', userSchema);

module.exports = User;
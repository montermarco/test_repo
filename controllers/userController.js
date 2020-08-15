const User = require('./../models/userModel');
const AppError = require('./../utils/appError');
const catchAsync = require('../utils/catchAsync');


// we pass the field names we want to filter line 36
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(field => {
    if (allowedFields.includes(field)) newObj[field] = obj[field];
  });
  return newObj;
};

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1 Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError('Esta ruta no es para actualizar contraseñas, para actualizar tu contraseña usa /updateMyPassword.', 400));
  }

  // 2 Filtered out unwanted fields names that are not allowed to be updated, like role ...
  const filteredBody = filterObj(req.body, 'name', 'email', 'role');

  // 3 Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  // send the response 
  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
});

// we dont delete users, we deactivate them
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'Success',
    data: null
  });
});

  exports.getUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!'
    });
  };
  exports.createUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!'
    });
  };
  exports.updateUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!'
    });
  };
  exports.deleteUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!'
    });
  };
  
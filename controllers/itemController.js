const Item = require('../models/ItemModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllItems = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Item.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const items = await features.query;

  res.status(200).json({
    staus: 'Sucess',
    results: items.length,
    data: {
        items
    }
  })
});

exports.getAllCategoryItems = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Item.find({ categoria: req.params.category}), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
        
    const items = await features.query;

    res.status(200).json({
        status: 'Success',
        results: items.length,
        data: {
          items
        }
    });
});

exports.getCategoryItem = catchAsync(async (req, res, next) => {
  const item = await Item.findById(req.params.id);
  
  if (!item) {
    return next(new AppError('No item found with that ID', 404));
  }

  res.status(200).json({
    staus: 'Sucess',
    data: {
        item
    }
  })
});

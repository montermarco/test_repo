const Item = require('../models/ItemModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');

exports.getSaleItems = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Item.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const saleItems = await features.query;

  res.status(200).json({
    staus: 'Sucess',
    results: saleItems.length,
    data: {
        saleItems
    }
  })
});

exports.getAllCategoryItems = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Item.find({ categoria: req.params.category}), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
        
    const saleItems = await features.query;

    res.status(200).json({
        status: 'Success',
        results: saleItems.length,
        data: {
          saleItems
        }
    });
});

exports.getOneSaleItem = catchAsync(async (req, res, next) => {
  const saleItem = await Item.findById(req.params.id);

  if (!saleItem) {
      return next(new AppError('No sales item found with that ID', 404));
  }
  
  res.status(200).json({
      staus: 'Sucess',
      data: {
          saleItem
      }
  })
});


const Item = require('../models/ItemModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllItems = catchAsync(async (req, res, next) => {
    const items = await Item.find(); // find() returns an query/object     
    res.status(200).json({
      status: 'Success',
      results: items.length,
      data: {
        items
      }
    });
});

exports.getItem = catchAsync(async (req, res, next) => {
  const item = await Item.findById(req.params.id);

  if (!item) {
    return next(new AppError('No item found with that ID', 404));
  }

    res.status(200).json({
      status: 'Success',
      data: {
        item
      }
    });
});

exports.createItem = catchAsync(async (req, res, next) => {
    const newItem = await Item.create(req.body);
    res.status(201).json({
      status: 'Success',
      data: {
        item: newItem
      }
    });    
});

exports.updateItem = catchAsync(async (req, res, next) => {
const item = await Item.findByIdAndUpdate(
    req.params.id, 
    req.body, {
        new: true,
        runValidators: true
    });

    if (!item) {
      return next(new AppError('No item found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
        item
        }
    });
});
  
exports.deleteItem = catchAsync(async (req, res, next) => {
  const item = await Item.findByIdAndDelete(req.params.id);

  if (!item) {
    return next(new AppError('No item found with that ID', 404));
  }

    res.status(204).json({
        status: 'success',
        data: null
    });    
});

// ITEMS STATS WITH AGREGATION PIPELINE
exports.itemStats = catchAsync(async (req, res, next) => {
    const stats = await Item.aggregate([
        {
            $match: { paquete: true }
        },
        {
            $group: {
              _id: '$categoria',
              paquetes: { $sum: 1 },
              precio_min: { $min: '$precio' },
              precio_max: { $max: '$precio' },
              disponibles: { $sum: '$stock'}
            }
        },
        {
            $sort: { disponibles: -1 }
        }
    ])
    res.status(200).json({
        status: 'success',
        data: {
            stats
        }
    });   
});

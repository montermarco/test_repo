const Item = require('../models/ItemModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// in order to get rid of out trycatch blocks we wrap the async function in catchAsync function
// this will return an anonimous function that will be assigned to create tour, we are gonna catch the
// errors in catchAsync 

exports.getPackages = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Item.find({paquete: true}), req.query )
    .filter()
    .sort()
    .limitFields()
    .paginate();

    const packages = await features.query;

    res.status(200).json({
       status: 'Success',
       results: packages.length,
       data: {
         packages                
       }
   });
});

exports.getOnePackage = catchAsync(async (req, res, next) => {
    const packageNoryan = await Item.findById(req.params.id);

    if (!packageNoryan) {
        return next(new AppError('No package found with that ID', 404));
    }
    
    res.status(200).json({
        staus: 'Sucess',
        data: {
            packageNoryan
        }
    })
});
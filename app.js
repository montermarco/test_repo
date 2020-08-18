const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const itemAdminRouter = require('./routes/itemAdminRoutes');
const itemRouter = require('./routes/itemsRoutes');
const packageRouter = require('./routes/packageRoutes');
const salesRouter = require('./routes/salesRoutes');
const userRouter = require('./routes/userRouter');
const path = require('path');

const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

const app = express();

// Global middlewares 

// Set security HTTP headers
app.use(helmet());

// Limiting request per hour
const limiter = rateLimit({
  max: 250,
  windowMs: 60 * 60 * 1000,
  message: 'Demasiados request desde esta IP, por favor intenta en una hora ...'
});
app.use('/api', limiter);

// Developing loggin
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

// Body parser reading data from body into req.body
app.use(express.json());

// Data sanitization against NoSQL injections
app.use(mongoSanitize()); // "email": {"$gt": ""},

// Data sanitization against xss cross-site scripting - malisious html
app.use(xss());

// prevent parametter polution
app.use(hpp({
  whitelist: [ 'precio', 'tamaño','medidas', 'modular', 'paquete', 'pelotas', 'adultos' ]
}));
 
// route handler
app.use('/api/items_admin', itemAdminRouter);
app.use('/api/items', itemRouter);
app.use('/api/packages', packageRouter);
app.use('/api/sales', salesRouter);
app.use('/api/users', userRouter);

//serve statics asstes in prod
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', build, 'index.html'));
  })
}

// NOT FOUND route handler
app.all('*', (req, res, next) => {
    next( new AppError(`Route ${req.originalUrl} was not found in this server, please check!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;

const express = require('express');
const packageController = require('../controllers/packageController');

const router = express.Router();

// SHOWS PACKAGES
router
  .route('/')
  .get(packageController.getPackages);


// SHOWS ONE PACKAGE
router
  .route('/:id')
  .get(packageController.getOnePackage); 

module.exports = router;
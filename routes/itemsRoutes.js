const express = require('express');
const itemController = require('../controllers/itemController');
const authController = require('../controllers/authController');

const router = express.Router();

//SHOWS ALL ITEMS authController.protect, 
router
  .route('/')
  .get(itemController.getAllItems);

// SHOWS CATEGORY LIST
router
  .route('/:category')
  .get(itemController.getAllCategoryItems); 

// SHOWS CATEGORY ITEM
router
  .route('/:category/:id')
  .get(itemController.getCategoryItem); 

module.exports = router;
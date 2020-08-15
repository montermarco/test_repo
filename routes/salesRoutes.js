const express = require('express');
const salesController = require('../controllers/salesController');

const router = express.Router();

router
  .route('/catalog')
  .get(salesController.getSaleItems);

// SHOWS CATEGORY LIST
router
  .route('/catalog/:category')
  .get(salesController.getAllCategoryItems);

router
  .route('/catalog/:category/:id')
  .get(salesController.getOneSaleItem);  

module.exports = router;
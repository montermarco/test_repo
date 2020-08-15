const express = require('express');
const itemAdminController = require('../controllers/itemAdminController');
const authController = require('../controllers/authController');

const router = express.Router();


router
  .route('/stats')
  .get(itemAdminController.itemStats);

router
  .route('/')
  .get(itemAdminController.getAllItems)
  .post(itemAdminController.createItem);

router
  .route('/:id')
  .get(itemAdminController.getItem)
  .patch(authController.protect, authController.restrictTo('admin', 'staff'),itemAdminController.updateItem)
  .delete(authController.protect, authController.restrictTo('admin'), itemAdminController.deleteItem);
  
module.exports = router;
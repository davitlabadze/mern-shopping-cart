const express = require('express');
const { getAllProducts, getProductByid } = require('../controllers/productController');
const router = express.Router();

router.get('/', getAllProducts)
router.get('/:id',getProductByid)

module.exports = router;
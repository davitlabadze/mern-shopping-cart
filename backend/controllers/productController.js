const Product = require('../models/Product')



/**
 * @desc    GET all Products
 * @route   GET /api/products
 * @access  Public
 */
const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Server Error"})
    }
}

/**
 * @desc    GET a product by id
 * @route   GET /api/products/:id
 * @access  Public
 */
const getProductByid = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Server Error"})
    }
}

module.exports = {
    getAllProducts,
    getProductByid,
}
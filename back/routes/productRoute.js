const express = require('express');
const router = express.Router();

const {getProducts, newProduct, getProductById} = require('../controllers/productController');

router.route('/products').get(getProducts);
router.route("/products/new").post(newProduct);
router.route('/products/:id').get(getProductById);



module.exports = router;
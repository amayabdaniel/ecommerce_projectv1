const express = require('express');
const router = express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require('../controllers/productController');

router.route('/products').get(getProducts);
router.route("/products/new").post(newProduct);
router.route('/products/:id').get(getProductById);
router.route('/products/:id').put(updateProduct);
router.route('/products/:id').delete(deleteProduct);



module.exports = router;
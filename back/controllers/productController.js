const producto = require("../models/productos");

//Ver la lista de productos
exports.getProducts = async (req, res, next) => {

    const productos = await producto.find();
    res.status(200).json({
      success: true,
      count: productos.length,
      productos
    });
};
//ver un producto por id
exports.getProductById = async (req, res, next) => {
    const product = await producto.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Producto no encontrado"
        });
    }

    res.status(200).json({
        success: true,
        mensaje: "Producto encontrado",
        product
    });
};
//Update a product
exports.updateProduct = async (req, res, next) => {
    let product = await producto.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Producto no encontrado"
        });
    }
    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        message: "Producto actualizado",
        product
    });
};
//Delete a product
exports.deleteProduct = async (req, res, next) => {
    const product = await producto.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Producto no encontrado"
        });
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Producto eliminado"
    });
};
//Crear nuevo producto /api/productos
exports.newProduct = async (req, res, next) => {
    const product = await producto.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
};
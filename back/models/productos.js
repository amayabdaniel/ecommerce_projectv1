const mongoose = require('mongoose');


const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor ingrese el nombre del producto'],
        trim: true,
        maxLength: [120, 'El nombre del producto no puede exceder los 120 caracteres']
    },
    precio: {
        type: Number,
        required: [true, 'Por favor ingrese el precio del producto'],
        maxLength: [8, 'El precio del producto no puede exceder los 8 caracteres'],
    },
    descripcion: {
        type: String,
        required: [true, 'Por favor ingrese la descripción del producto'],
    },
    calificacion: {
        type: Number,
        default: 0
    },
    imagen: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    categoria: { 
        type: String,
        required: [true, 'Por favor ingrese la categoría del producto'],
        enum: {
            values: [
                "Alimento seco",
                "Alimento húmedos",
                "Snacks",
                "Higiene",
                "Juguetes",
                "Accesorios",
                "Otros",
                "Medicamentos"
            ]
        }
    },
    vendedor: {
        type: String,
        required: [true, 'Por favor ingrese el nombre del vendedor']
    },
    inventario: {
        type: Number,
        required: [true, 'Por favor ingrese la cantidad de productos en inventario'],
        maxLength: [5, 'El inventario no puede exceder los 4 caracteres'],
        default: 0
    },
    numCalificaciones: {
        type: Number,
        default: 0
    },
    opiniones: [
        {
            nombreCliente: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comentario: {
                type: String,
                required: true
            }
        }
    ],
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('productos', productoSchema);
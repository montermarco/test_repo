const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    indice: Number,
    nombre: {
        type: String,
        required: [true, 'El item debe contener un nombre'],
        trim: true
    },
    categoria: {
        type: String,
        required: [true, 'El item debe pertenecer a una categoria'],
        trim: true
    },
    tamaño: {
        type: String,
        enum: {
            values: ['chico', 'mediano', 'grande' ],
            message: 'Los tamaños son chico mediano o grande'
        },
        trim: true
    },
    paquete:  {
        type: Boolean,
        default: false
      },
    medidas: [Number],
    precio: {
        type: Number,
        required: [true, 'El item debe tener un precio']
    },
    descuentoPromotorEntrega: Number,
    descuentoPromotorAlmacen: Number,
    precioPaquete: Number,
    fotoCover: {
        type: String, // name of the pic to get 
        required: [true, 'El item debe tener una imagen de portada']
    },
    fotos: [String],
    descripcion:{
        type: String,
        trim: true,
        required: [true, 'El item debe contar con una descripción']
    },
    stock: {
        type: Number,
        required: [true, 'Ingresa el numero de items en inventario']
    },
    modular:  {
        type: Boolean,
        default: false
      },
    modulos: [Number],
    pelotas:  {
        type: Boolean,
        default: false
    },
    adultos:  {
        typxe: Boolean,
        default: false
    },
    observaciones: {
        type: String,
        trim: true
    },
    precioVenta: {
        type: Number,
        required: [true, 'El item debe tener un precio de venta']
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    startDates: [Date],
},
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
    }
);

itemSchema.virtual('precio_almacen').get(function() {
    return this.precio - (this.descuentoPromotorAlmacen / 100 * this.precio);
});

itemSchema.virtual('precio_entrega').get(function() {
    return this.precio - (this.descuentoPromotorEntrega / 100 * this.precio);
});  

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

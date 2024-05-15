const mongoose = require('mongoose');
const dayjs = require('dayjs');

const productoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    count_sale:{

    },
    tamanos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tamano',
        required: false
    }],
    createdAt: {
        type: Date,
        default: dayjs().toDate()
    }
}, {
    timestamps: true
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;

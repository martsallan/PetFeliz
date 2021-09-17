import mongoose from "mongoose";

const productTable = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true},
    brand: { type: String, required: true},
    description: { type: String, required: true},
    price: {type: Number, required: true},
    qqtStock: { type: Number, required: true },

}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productTable);

export default Product;
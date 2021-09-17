import mongoose from "mongoose";

const orderTable = new mongoose.Schema({
    orderItems: [{
            name: { type: String, required: true },
            image: { type: String, required: true },
            price: {type: Number, required: true},
            qty: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
        },
    ],
    shippingData: {
        fullName: { type: String, required: true },
        street: { type: String, required: true },
        neighbourhood: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true },
        paymentMethod: { type: String, required: true },
    },
    itemsPrice: { type: String, required: true },
    shippingPrice: { type: String, required: true },
    totalPrice: { type: String, required: true },
    user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: {type: Date}
}, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderTable);

export default Order;
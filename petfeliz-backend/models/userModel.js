import mongoose from "mongoose";

const userTable = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    phoneNumber: {type: String, required: true},
    isVerified: { type: Boolean, required: true, default: false },
    isAdmin: {type: Boolean, required: true, default: false}
}, {
    timestamps: true,
});

const User = mongoose.model('User', userTable);

export default User;
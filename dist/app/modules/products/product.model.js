"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const VariantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
}, { _id: false });
const InventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
}, { _id: false });
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    inventory: InventorySchema,
    tags: {
        type: [String],
        required: true,
    },
    variants: {
        type: [VariantSchema],
        required: true,
    },
}, { versionKey: false });
const ProductModel = (0, mongoose_1.model)('Product', ProductSchema);
exports.default = ProductModel;

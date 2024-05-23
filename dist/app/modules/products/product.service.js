"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = __importDefault(require("./product.model"));
// Create a new product
const createProductDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.create(payload);
});
// Get all products, optionally filtered by a search term
const getAllProductDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (!searchTerm) {
        return yield product_model_1.default.find({});
    }
    else {
        return yield product_model_1.default.find({
            $text: { $search: searchTerm, $caseSensitive: false },
        });
    }
});
// Get a single product by ID
const getProductDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.findOne({ _id: productId });
});
// Update a product by ID
const updateProductDB = (productId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_model_1.default.updateOne({ _id: productId }, { $set: data });
    return data;
});
// Delete a product by ID
const deleteProductDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_model_1.default.deleteOne({ _id: productId });
    return null;
});
// Exporting product services
exports.ProductService = {
    createProductDB,
    getAllProductDB,
    getProductDB,
    updateProductDB,
    deleteProductDB,
};

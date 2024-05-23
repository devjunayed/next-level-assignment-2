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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const product_validate_1 = require("./product.validate");
// Create a product after validating the request body using Zod schema
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        // Validate the incoming data using Zod schema
        const zodParsedData = product_validate_1.ZProductSchema.parse(data);
        // Create the product in the database
        const result = yield product_service_1.ProductService.createProductDB(zodParsedData);
        // Send a success response with the created product data
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    }
    catch (err) {
        // Send an error response if the product creation fails
        res.status(500).json({
            success: false,
            message: 'Could not create product',
            error: err,
        });
    }
});
// Get all products, optionally filtering by a search term
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        // Retrieve all products, optionally filtering by the search term
        const result = yield product_service_1.ProductService.getAllProductDB(searchTerm);
        // Send a success response with the retrieved products
        res.status(200).json({
            success: true,
            message: searchTerm
                ? `Products matching search term '${searchTerm}' fetched successfully!`
                : 'Products fetched successfully!',
            data: result,
        });
    }
    catch (err) {
        // Send an error response if the product retrieval fails
        res.status(500).json({
            success: false,
            message: 'Could not fetch products',
            error: err,
        });
    }
});
// Get a single product by its ID
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get the product ID from the request parameters
        const productId = req.params.productId;
        // Retrieve the product from the database
        const result = yield product_service_1.ProductService.getProductDB(productId);
        // Send a success response with the retrieved product
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
        });
    }
    catch (err) {
        // Send an error response if the product retrieval fails
        res.status(500).json({
            success: false,
            message: 'Could not fetch the product',
            error: err,
        });
    }
});
// Update a single product by its ID
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get the product ID from the request parameters
        const productId = req.params.productId;
        const updatedProduct = req.body;
        // Validate the updated product data using Zod schema
        const zodParsedData = product_validate_1.ZProductSchema.parse(updatedProduct);
        // Update the product in the database
        const result = yield product_service_1.ProductService.updateProductDB(productId, zodParsedData);
        // Send a success response with the updated product data
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
        });
    }
    catch (err) {
        // Send an error response if the product update fails
        res.status(500).json({
            success: false,
            message: 'Could not update the product',
            error: err,
        });
    }
});
// Delete a single product by its ID
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get the product ID from the request parameters
        const productId = req.params.productId;
        // Delete the product from the database
        const result = yield product_service_1.ProductService.deleteProductDB(productId);
        // Send a success response indicating the product was deleted
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: result,
        });
    }
    catch (err) {
        // Send an error response if the product deletion fails
        res.status(500).json({
            success: false,
            message: 'Could not delete the product',
            error: err,
        });
    }
});
// Export the product controller functions
exports.ProductController = {
    createProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    deleteProduct,
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// Create a new product
router.post('/', product_controller_1.ProductController.createProduct);
// Fetch all products
router.get('/', product_controller_1.ProductController.getAllProduct);
// Fetch a single product by ID
router.get('/:productId', product_controller_1.ProductController.getProduct);
// Update a product by ID
router.put('/:productId', product_controller_1.ProductController.updateProduct);
// Delete a product by ID
router.delete('/:productId', product_controller_1.ProductController.deleteProduct);
// Exporting product routes
exports.ProductRoutes = router;

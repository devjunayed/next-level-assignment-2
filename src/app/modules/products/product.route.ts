import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// Create a new product
router.post('/', ProductController.createProduct);

// Fetch all products
router.get('/', ProductController.getAllProduct);

// Fetch a single product by ID
router.get('/:productId', ProductController.getProduct);

// Update a product by ID
router.put('/:productId', ProductController.updateProduct);

// Delete a product by ID
router.delete('/:productId', ProductController.deleteProduct);

// Exporting product routes
export const ProductRoutes = router;

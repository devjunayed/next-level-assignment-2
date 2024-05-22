import express from 'express'
import { ProductController } from './product.controller'

const router = express.Router()

// post route -> end point will be /api/products
router.post('/', ProductController.createProduct)

// get route -> end point will be /api/products
router.get('/', ProductController.getAllProduct);

// get route -> end point will be /api/products/:productId
router.get("/:productId", ProductController.getProduct);

// get route -> end point will be /api/products/:productId
router.put("/:productId", ProductController.updateProduct);
// get route -> end point will be /api/products/:productId
router.delete("/:productId", ProductController.deleteProduct);


// exporting router for products
export const ProductRoutes = router

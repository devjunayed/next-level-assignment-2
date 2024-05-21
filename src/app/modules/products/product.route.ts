import express from 'express'
import { ProductController } from './product.controller';

const router = express.Router()

router.post('/', ProductController.createProduct)

export const ProductRoutes = router;

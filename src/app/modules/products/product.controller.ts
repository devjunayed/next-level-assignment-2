import { Request, Response } from 'express'
import { ProductService } from './product.service'
import { ZProductSchema } from './product.validate';

const createProduct = async (req: Request, res: Response) => {
  try {
    const data =  req.body;

    const zodParsedData = ZProductSchema.parse(data);

    const result = await ProductService.createProduct(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not create product',
      error: err,
    })
  }
}

export const ProductController = {
  createProduct,
}

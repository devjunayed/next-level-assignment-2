import { Request, Response } from 'express'
import { ProductService } from './product.service'
import { ZProductSchema } from './product.validate'

// create prodcuts after zod validation
const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body

    const zodParsedData = ZProductSchema.parse(data)

    const result = await ProductService.createProductDB(zodParsedData)

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
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

// get all products
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductDB()

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not fetched product',
      error: err,
    })
  }
}

// get single product using id
const getProduct = async (req: Request, res: Response) => {
  try {
    // getting id from the params
    const productId = req.params.productId;

    // getting porducts from the service
    const result = await ProductService.getProductDB(productId);

    // sending response
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
  } catch (err) {
    // sending response
    res.status(500).json({
      success: false,
      message: 'Could not fetched the product',
      error: err,
    })
  }
}


// update single product using id
const updateProduct = async (req: Request, res: Response) => {
  try {
    // getting id from the params
    const productId = req.params.productId;
    const updatedProduct = req.body;

    const zodParsedData = ZProductSchema.parse(updatedProduct);


    // updating porducts in  the service
    const result = await ProductService.updateProductDB(productId, zodParsedData);

    // sending response
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    })
  } catch (err) {
    // sending response
    res.status(500).json({
      success: false,
      message: 'Could not update the product',
      error: err,
    })
  }
}
// update single product using id
const deleteProduct = async (req: Request, res: Response) => {
  try {
    // getting id from the params
    const productId = req.params.productId;

    // updating porducts in  the service
    const result = await ProductService.deleteProductDB(productId);

    // sending response
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    })
  } catch (err) {
    // sending response
    res.status(500).json({
      success: false,
      message: 'Could not update the product',
      error: err,
    })
  }
}


export const ProductController = {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct
}

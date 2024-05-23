import { Request, Response } from 'express';
import { ProductService } from './product.service';
import { ZProductSchema } from './product.validate';

// Create a product after validating the request body using Zod schema
const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    // Validate the incoming data using Zod schema
    const zodParsedData = ZProductSchema.parse(data);

    // Create the product in the database
    const result = await ProductService.createProductDB(zodParsedData);

    // Send a success response with the created product data
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    // Send an error response if the product creation fails
    res.status(500).json({
      success: false,
      message: 'Could not create product',
      error: err,
    });
  }
};

// Get all products, optionally filtering by a search term
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;

    // Retrieve all products, optionally filtering by the search term
    const result = await ProductService.getAllProductDB(
      searchTerm as string | undefined,
    );

    // Send a success response with the retrieved products
    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    // Send an error response if the product retrieval fails
    res.status(500).json({
      success: false,
      message: 'Could not fetch products',
      error: err,
    });
  }
};

// Get a single product by its ID
const getProduct = async (req: Request, res: Response) => {
  try {
    // Get the product ID from the request parameters
    const productId = req.params.productId;

    // Retrieve the product from the database
    const result = await ProductService.getProductDB(productId);

    // Send a success response with the retrieved product
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    // Send an error response if the product retrieval fails
    res.status(500).json({
      success: false,
      message: 'Could not fetch the product',
      error: err,
    });
  }
};

// Update a single product by its ID
const updateProduct = async (req: Request, res: Response) => {
  try {
    // Get the product ID from the request parameters
    const productId = req.params.productId;
    const updatedProduct = req.body;

    // Validate the updated product data using Zod schema
    const zodParsedData = ZProductSchema.parse(updatedProduct);

    // Update the product in the database
    const result = await ProductService.updateProductDB(
      productId,
      zodParsedData,
    );

    // Send a success response with the updated product data
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    // Send an error response if the product update fails
    res.status(500).json({
      success: false,
      message: 'Could not update the product',
      error: err,
    });
  }
};

// Delete a single product by its ID
const deleteProduct = async (req: Request, res: Response) => {
  try {
    // Get the product ID from the request parameters
    const productId = req.params.productId;

    // Delete the product from the database
    const result = await ProductService.deleteProductDB(productId);

    // Send a success response indicating the product was deleted
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (err) {
    // Send an error response if the product deletion fails
    res.status(500).json({
      success: false,
      message: 'Could not delete the product',
      error: err,
    });
  }
};

// Export the product controller functions
export const ProductController = {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};

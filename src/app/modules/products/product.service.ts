
import { TProduct } from './product.interface';
import ProductModel from './product.model';

// Create a new product
const createProductDB = async (payload: TProduct) => {
  return await ProductModel.create(payload);
};

// Get all products, optionally filtered by a search term
const getAllProductDB = async (searchTerm: string | undefined) => {
  if (!searchTerm) {
    return await ProductModel.find({});
  } else {
    return await ProductModel.find({
      $text: { $search: searchTerm, $caseSensitive: false },
    });
  }
};

// Get a single product by ID
const getProductDB = async (productId: string) => {
  return await ProductModel.findOne({ _id: productId });
};

// Update a product by ID
const updateProductDB = async (productId: string, data: TProduct) => {
  await ProductModel.updateOne({ _id: productId }, { $set: data });
  return data;
};

// Delete a product by ID
const deleteProductDB = async (productId: string) => {
  await ProductModel.deleteOne({ _id: productId });
  return null;
};

// Exporting product services
export const ProductService = {
  createProductDB,
  getAllProductDB,
  getProductDB,
  updateProductDB,
  deleteProductDB,
};

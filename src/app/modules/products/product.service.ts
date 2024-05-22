import { TProduct } from './product.interface';
import ProductModel from './product.model';

// create a product into database
const createProductDB = async (payload: TProduct) => {
  const result = await ProductModel.create(payload);
  return result;
};

// get all product from the database
const getAllProductDB = async (searchTerm: string | undefined) => {
  let result: TProduct[] = [];

  if (searchTerm?.length === 0 || searchTerm === undefined) {
    result = await ProductModel.find({});
  } else {
    result = await ProductModel.find({
      $text: { $search: searchTerm, $caseSensitive: false },
    });
  }

  return result;
};

// get a single product from the database
const getProductDB = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId });
  return result;
};

const updateProductDB = async (productId: string, data: TProduct) => {
  const result = await ProductModel.updateOne(
    { _id: productId },
    { $set: data },
  );
  return data;
};

const deleteProductDB = async (productId: string) => {
  await ProductModel.deleteOne({ _id: productId });
  return null;
};

// exporting all services
export const ProductService = {
  createProductDB,
  getAllProductDB,
  getProductDB,
  updateProductDB,
  deleteProductDB,
};

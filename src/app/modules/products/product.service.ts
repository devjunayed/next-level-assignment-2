import { TProduct } from "./product.interface"
import ProductModel from "./product.model";

const createProduct = async (payload: TProduct) => {
    const result = await ProductModel.create(payload);
    return result;
}

export const ProductService = {
    createProduct
}
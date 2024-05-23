import ProductModel from '../products/product.model';
import { TOrder } from './order.interface';
import OrderModel from './order.model';

const createOrderDB = async (data: TOrder) => {
  // Find the product by ID
  const product = await ProductModel.findOne({ _id: data.productId });

  let result: any = {};

  // Check if the product exists and has sufficient inventory
  if (
    product &&
    product.inventory?.quantity !== undefined &&
    product.inventory.quantity >= data.quantity
  ) {
    // Decrease the product inventory by the ordered quantity
    const productUpdateResult = await ProductModel.updateOne(
      { _id: data.productId },
      { $inc: { 'inventory.quantity': -data.quantity } },
    );

    // Re-fetch the product to check the updated inventory status
    const productAfterDeduction = await ProductModel.findOne({ _id: data.productId });

    // If the inventory quantity reaches zero, update the inStock status
    if (productAfterDeduction?.inventory?.quantity === 0) {
      const productStockUpdateResult = await ProductModel.updateOne(
        { _id: data.productId },
        { $set: { 'inventory.inStock': false } },
      );
    }

    // Create the order
    result = await OrderModel.create(data);
  } else {
    // Indicate insufficient inventory
    result = { insufficient: true };
  }
  
  return result;
};

const getOrderDB = async (email: string | undefined) => {
  // Fetch orders based on the email query parameter
  if (!email) {
    // If no email is provided, fetch all orders
    return await OrderModel.find({});
  } else {
    // Fetch orders for the specific email
    return await OrderModel.find({ email });
  }
};

const OrderService = {
  createOrderDB,
  getOrderDB,
};

export default OrderService;

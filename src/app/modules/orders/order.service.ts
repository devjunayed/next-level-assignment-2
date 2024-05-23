import ProductModel from '../products/product.model';
import { TOrder } from './order.interface';
import OrderModel from './order.model';

const createOrderDB = async (data: TOrder) => {
  const product = await ProductModel.findOne({ _id: data.productId });

  let result: any = {};

  if (
    product &&
    product?.inventory?.quantity !== undefined &&
    product?.inventory?.quantity >= data.quantity
  ) {
    const prodcutUpdateResult = await ProductModel.updateOne(
      { _id: data.productId },
      { $inc: { 'inventory.quantity': -data.quantity } },
    );

    const productAfterDeduction = await ProductModel.findOne({
      _id: data.productId,
    });

    if (productAfterDeduction?.inventory?.quantity === 0) {
      const productStockUpdateResult = await ProductModel.updateOne(
        { _id: data.productId },
        { $set: { 'inventory.inStock': false } },
      );
    }

    result = await OrderModel.create(data);

  }else{
    result  = {insufficient: true};
  }
  return result;
};

const getOrderDB = async (email: string | undefined) => {
  if (!email) {
    return await OrderModel.find({});
  } else {
    return await OrderModel.find({
      email,
    });
  }
};

const OrderService = {
  createOrderDB,
  getOrderDB,
};

export default OrderService;

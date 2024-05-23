import { TOrder } from './order.interface';
import { Schema, model } from 'mongoose';

const OrderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false },
);

const OrderModel = model('Order', OrderSchema);

export default OrderModel;

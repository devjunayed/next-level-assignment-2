import { TOrder } from "./order.interface";
import OrderModel from "./order.model";

const createOrderDB = async (data: TOrder) => {
    const result = await OrderModel.create(data);
    return result;
}

const getOrderDB = async() => {
    const result = await OrderModel.find().select('-_id');
    return result;
}

const OrderService = {
    createOrderDB,
    getOrderDB
}

export default OrderService;
import { TOrder } from "./order.interface";
import OrderModel from "./order.model";

const createOrderDB = async (data: TOrder) => {
    const result = await OrderModel.create(data);
    return result;
}

const OrderService = {
    createOrderDB
}

export default OrderService;
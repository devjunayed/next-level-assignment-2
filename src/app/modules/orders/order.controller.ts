import { Request, Response } from 'express';
import OrderService from './order.service';
import ZOrderSchema from './order.validate';

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const zodParsedData = ZOrderSchema.parse(data);
    const result = await OrderService.createOrderDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not created order!',
    });
  }
};

export const OrderController = {
  createOrder,
};

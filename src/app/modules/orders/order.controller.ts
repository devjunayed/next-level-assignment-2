import { Request, Response } from 'express';
import OrderService from './order.service';
import ZOrderSchema from './order.validate';

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const zodParsedData = ZOrderSchema.parse(data);
    const result = await OrderService.createOrderDB(zodParsedData);

    if (result.insufficient) {
      res.status(500).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Order created successfully!',
        data,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not created order!',
    });
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;

    const result = await OrderService.getOrderDB(email as string | undefined);

    res.status(200).json({
      success: true,
      message: email
        ? 'Orders fetched successfully for user email!'
        : 'Orders fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not get order!',
    });
  }
};

export const OrderController = {
  createOrder,
  getOrder,
};

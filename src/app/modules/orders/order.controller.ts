import { Request, Response } from 'express';
import OrderService from './order.service';
import ZOrderSchema from './order.validate';

// Function to create a new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    // Validate the request body against the Zod schema
    const zodParsedData = ZOrderSchema.parse(data);

    // Create the order in the database
    const result = await OrderService.createOrderDB(zodParsedData);

    // Check if there was insufficient inventory for the order
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
      message: 'Could not create order!',
    });
  }
};

// Function to get orders based on user email
const getOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;

    // Fetch the orders from the database
    const result = await OrderService.getOrderDB(email as string | undefined);

    // Check if no orders were found
    if (result.length === 0) {
      res.status(500).json({
        success: false,
        message: 'Order not found',
      });
    } else {
      res.status(200).json({
        success: true,
        message: email
          ? 'Orders fetched successfully for user email!'
          : 'Orders fetched successfully!',
        data: result,
      });
    }
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

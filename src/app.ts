import express from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/products/product.route';
import { OrdersRoutes } from './app/modules/orders/order.route';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrdersRoutes);

app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;

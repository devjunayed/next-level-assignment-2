import express from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/products/product.route';


const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/products", ProductRoutes);

export default app;
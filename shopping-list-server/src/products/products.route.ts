import express from 'express';
import { addProduct } from './products.controller';

export const productRouter = express.Router();

productRouter.post('/add-product', addProduct);
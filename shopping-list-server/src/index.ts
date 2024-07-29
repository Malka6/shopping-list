import express from 'express'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { productRouter } from './products/products.route';
const { Client } = require('@elastic/elasticsearch');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/products', productRouter);

export const elasticClient = new Client({
    node: process.env.NODE_PATH,
    auth: {
        apiKey: process.env.NODE_APIKEY
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
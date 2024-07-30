import { Router } from 'express'
import dotenv from 'dotenv';
import { Client } from '@elastic/elasticsearch'
import { App } from './app';
import { ProductsRouter } from './products/products.route';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { CategoriesRouter } from './categories/categories.route';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    elastic: {
        node: process.env.NODE_PATH || '',
        apiKey: process.env.NODE_APIKEY || ''
    }
}

export const elasticClient = new Client( {
    node: config.elastic.node,
    auth: {
        apiKey: config.elastic.apiKey
    }
} );

const productsRouter = new ProductsRouter( Router(), new ProductsController( new ProductsService() ) );
const categoriesRouter = new CategoriesRouter( Router(), new CategoriesController( new CategoriesService() ) );

new App( productsRouter, categoriesRouter )
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

const productsController = new ProductsController( new ProductsService() );
const categoriesController = new CategoriesController( new CategoriesService() );

const productsRouter = new ProductsRouter( Router(), productsController );
const categoriesRouter = new CategoriesRouter( Router(), categoriesController );

new App( productsRouter, categoriesRouter );
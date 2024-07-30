import bodyParser from 'body-parser';
import express from 'express'
import http from 'http'
import { config } from '.';
import { ProductsRouter } from './products/products.route';
import { CategoriesRouter } from './categories/categories.route';

export class App {
    public expressApp: express.Express;
    public server: http.Server;

    public prefix = "/api"

    constructor ( private productsRouter: ProductsRouter, private categoriesRouter: CategoriesRouter ) {
        this.expressApp = express()
        this.server = new http.Server( this.expressApp )
        this.expressApp.use( bodyParser.json() )
        this.registerApiRoutes()
        this.startServer()
    }

    private registerApiRoutes = () => {
        this.expressApp.use( `${ this.prefix }/${ this.productsRouter.path }`, this.productsRouter.router );
        this.expressApp.use( `${ this.prefix }/${ this.categoriesRouter.path }`, this.categoriesRouter.router );
    }

    private startServer = () => {
        this.server.listen( config.port, () => {
            setTimeout( () => this.server.emit( 'server_is_ready' ), 100 );
            console.log( `Listening on port ${ config.port }` );
        } )
    }

}
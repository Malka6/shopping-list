import { Router } from 'express';
import { ProductsController } from './products.controller';

export class ProductsRouter {
    public path: string = 'products';

    constructor ( public router: Router, private productsController: ProductsController ) {
        router.post( '/add', productsController.addProduct );
        router.get( '/inventory', productsController.getInventory );
    }
}
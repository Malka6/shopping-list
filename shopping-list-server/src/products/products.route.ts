import { Router } from 'express';
import { ProductsController } from './products.controller';

export class ProductsRouter {
    public path: string = 'products';

    constructor (public router: Router, private productsController: ProductsController) {
        router.post('/add', productsController.addProduct);
        router.get('/shopping-list', productsController.getShoppingList);
        router.post('/order', productsController.orderProducts);
    }
}
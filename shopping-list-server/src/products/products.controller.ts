import { Request, Response } from 'express';
import { ProductsService } from './products.service';
import { ShoppingList } from './products.types';

export class ProductsController {
    constructor (private productsService: ProductsService) { }

    addProduct = async (req: Request, res: Response) => {
        const product = req.body;

        if (!product.name || !product.category) {
            return res.status(400).json({ error: 'Name and category are required' });
        }

        try {
            const productId = await this.productsService.insertProduct(product);
            if (productId) {
                return res.status(201).json({ id: productId });
            } else {
                throw 'Product id not defined';
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Failed to insert product' });
        }
    };

    orderProducts = async (req: Request, res: Response) => {
        const { shoppingList } = req.body;
        if (!shoppingList) {
            return res.status(400).json({ error: 'Shopping list is required' });
        }

        try {
            const orderId = await this.productsService.orderProducts(shoppingList);
            if (orderId) {
                return res.status(201).json({ id: orderId });
            } else {
                throw 'Order id not defined';
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Failed to insert new order' });
        }
    }

    getShoppingList = async (req: Request, res: Response) => {
        try {
            const shoppingList: ShoppingList = await this.productsService.getShoppingList();
            if (shoppingList) {
                return res.status(200).json({ shoppingList });
            } else throw 'Shopping list not defined.';
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Failed to get shopping list' });
        }
    }
}


import { Request, Response } from 'express';
import { ProductsService } from './products.service';
import { Inventory } from './products.types';

export class ProductsController {
    constructor ( private productsService: ProductsService ) { }

    addProduct = async ( req: Request, res: Response ) => {
        const product = req.body;

        if ( !product.name || !product.category ) {
            return res.status( 400 ).json( { error: 'Name and category are required' } );
        }

        const productId = await this.productsService.insertProduct( product );
        if ( productId ) {
            return res.status( 201 ).json( { id: productId } );
        } else {
            return res.status( 500 ).json( { error: 'Failed to insert product' } );
        }
    };

    getInventory = async ( req: Request, res: Response ) => {
        const inventory: Inventory = await this.productsService.getStoreInventory();
        if ( !inventory ) {
            return res.status( 500 ).json( { error: 'Failed to get products inventory.' } )
        } else return res.status( 200 ).json( { inventory } )
    }
}


import { Request, Response } from 'express';
import { CategoriesService } from './categories.service';

export class CategoriesController {
    constructor ( private categoriesService: CategoriesService ) { }

    getAllCategories = async ( _req: Request, res: Response ) => {
        try {
            const categories = await this.categoriesService.getUniqueCategories();
            if ( !categories || categories.length === 0 ) {
                return res.status( 500 ).json( { error: 'Failed to get categories list' } );
            }

            return res.status( 200 ).json( { categories } );
        } catch ( error ) {
            console.log( error );
            return res.status( 500 ).json( { error: 'Failed to get categories list' } );
        }
    }
}
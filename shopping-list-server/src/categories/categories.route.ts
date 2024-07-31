import { Router } from 'express';
import { CategoriesController } from './categories.controller';

export class CategoriesRouter {
    public path: string = 'categories';

    constructor ( public router: Router, private categoriesController: CategoriesController ) {
        router.get( '/all', categoriesController.getAllCategories );
    }
}
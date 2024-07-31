import { elasticClient } from '..';
import { Category } from './categories.types';

export class CategoriesService {
    getUniqueCategories = async (): Promise<Category[]> => {
        try {
            const response: any = await elasticClient.search<Category>( {
                index: 'products',
                body: {
                    size: 0,
                    aggs: {
                        unique_categories: {
                            terms: {
                                field: 'category',
                                size: 100
                            }
                        }
                    }
                }
            } );

            const uniqueCategories: Category[] = response?.aggregations?.unique_categories?.buckets || [];

            return uniqueCategories;
        } catch ( error ) {
            console.error( 'Error fetching unique categories:', error );
            throw new Error( 'Could not fetch unique categories' );
        }
    };
}
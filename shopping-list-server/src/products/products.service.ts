import { elasticClient } from "..";
import { CategoryAggregation, CategoryBucket, Inventory, Product } from "./products.types";

export class ProductsService {

    insertProduct = async ( product: Product ): Promise<string | null> => {
        try {
            const response = await elasticClient.index( {
                index: 'products',
                body: product,
            } );

            if ( response.result === 'created' ) console.log( 'The product has been successfully added.' );
            else throw `Adding the product failed with result: ${ response.result }`;
            return response._id;
        } catch ( error ) {
            console.error( 'Error inserting product:', error );
            return null;
        }
    };

    getStoreInventory = async (): Promise<Inventory> => {
        try {
            const response: any = await elasticClient.search<Product>( {
                index: 'products',
                body: {
                    size: 0,
                    aggs: {
                        categories: {
                            terms: {
                                field: 'category',
                                size: 100
                            },
                            aggs: {
                                names: {
                                    terms: {
                                        field: 'name',
                                        size: 100
                                    }
                                }
                            }
                        }
                    }
                }
            } );

            const aggregations: CategoryBucket[] = response.aggregations.categories.buckets || []
            const storeInventory: Inventory = {}
            aggregations.forEach( ( category ) => {
                storeInventory[ category.key ] = category.names.buckets.map( ( bucket ) => {
                    return { name: bucket.key, count: bucket.doc_count }
                } )
            } )
            return storeInventory;
        } catch ( error ) {
            console.error( 'Error fetching aggregated categories and names:', error );
            throw new Error( 'Could not fetch aggregated categories and names' );
        }
    };

}
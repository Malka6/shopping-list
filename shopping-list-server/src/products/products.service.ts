import { elasticClient } from "..";
import { Product } from "./products.types";

export const insertProduct = async (product: Product): Promise<string | null> => {
    try {
        const response = await elasticClient.index({
            index: 'products',
            body: product,
        });

        if (response.result === 'created') console.log('The product has been successfully added.');
        else throw `Adding the product failed with status: ${response.status}`;
        return response._id;
    } catch (error) {
        console.error('Error inserting product:', error);
        return null;
    }
};
export interface Product {
    name: string;
    category: string;
};

export interface ProductOrder { name: string; count: number };

export interface ShoppingList { [ category: string ]: ProductOrder[] };

interface NameBucket {
    key: string;
    doc_count: number;
}

export interface CategoryBucket {
    key: string;
    doc_count: number;
    names: {
        buckets: NameBucket[];
    };
}
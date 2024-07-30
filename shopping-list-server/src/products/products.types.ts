export interface Product {
    name: string;
    category: string;
};

export interface ProductInventory { name: string; count: number };

export interface Inventory { [ category: string ]: { name: string; count: number }[] };

export interface CategoryAggregation {
    doc_count: number;
    key: string;
    names: []
}

interface NameBucket {
    key: string;  // The unique name value
    doc_count: number;  // The count of documents with this name in the category
}

export interface Aggregations {
    categories: {
        buckets: CategoryBucket[]; // Array of CategoryBucket
    };
}

export interface CategoryBucket {
    key: string;  // The unique category value
    doc_count: number;  // The count of documents in this category
    names: {
        buckets: NameBucket[]; // Array of NameBucket for each name in this category
    };
}
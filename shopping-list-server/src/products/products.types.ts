export interface Product {
    name: string;
    category: string;
};

export interface ProductInventory { name: string; count: number };

export interface Inventory { [ category: string ]: ProductInventory[] };

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
export interface ProductInventory { name: string; count: number };

export interface Inventory { [ category: string ]: ProductInventory[] };
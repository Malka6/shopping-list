export interface ProductOrder { name: string; count: number };

export interface ShoppingList { [ category: string ]: ProductOrder[] };
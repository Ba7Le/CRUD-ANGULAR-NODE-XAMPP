export interface ProductI {
    id: number;
    name: string;
    description: string;
    price: string;
    status: string;
    categoryId: string;
    categoryName: string;
}

export interface ProductPayloadI {
    name: string;
    category: number;
    price: number;
    description: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface CategoryResponse {
    categories: Category[];
}
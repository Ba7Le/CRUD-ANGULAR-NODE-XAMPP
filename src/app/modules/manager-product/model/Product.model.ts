import { ProductPayloadI } from '../interface/product.interface';

export class ProductM {
    id: number | null;
    name: string | null;
    categoryId: number | null;
    description: string | null;
    price: number | null;

    constructor(data: ProductPayloadI) {
        this.id = data && data.id || null;
        this.name = data && data.name || null;
        this.categoryId = data && data.category || null;
        this.description = data && data.description || null;
        this.price = data && data.price || null;
    }
}
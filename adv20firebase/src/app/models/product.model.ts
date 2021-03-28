import { ICategory } from '../interfaces/category.interface';
import { IProduct } from '../interfaces/product.interface';

export class Product implements IProduct {
    constructor(
        public id: string,
        public category: ICategory,
        public nameUA: string,
        public description: string,
        public price: number,
        public image?: string
    ){}
}
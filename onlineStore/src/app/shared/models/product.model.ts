import { IProduct } from '../interfaces/product.interface';

export class Product implements IProduct {
    constructor(
        public id: string,
        public nameEN: string,
        public nameUA: string,
        public description: string,
        public price: number,
        public category: any[],
        public image: string,
        public count = 1,
        public inTop = false,
        comments?: []
    ){}
}

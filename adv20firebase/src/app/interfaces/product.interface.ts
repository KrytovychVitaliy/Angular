import { ICategory } from './category.interface';

export interface IProduct {
    id: string;
    category: ICategory;
    nameUA: string;
    description: string;
    price: number;
    image?: string;
}
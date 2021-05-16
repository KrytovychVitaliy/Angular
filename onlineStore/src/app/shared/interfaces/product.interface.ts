import { ICategory } from './category.interface';

export interface IProduct {
  id: string;
  nameEN: string;
  nameUA: string;
  description: string;
  price: number;
  category: any[];
  image: string;
  count: number;
  inTop: boolean | string;
  comments?: [];
}

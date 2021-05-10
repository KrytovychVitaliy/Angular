import { IProduct } from "./product.interface";
import { IUser } from "./user.interface";

export interface IComment {
  id: string;
  text: string;
  product: IProduct;
  productID: string;
  category: string;
  autor: IUser;
  autorEmail: string;
  date: Date;
  moderation: boolean;
}

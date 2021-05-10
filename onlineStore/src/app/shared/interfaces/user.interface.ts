import { IComment } from './comment.interface';
import { IOrder } from './order.interface';


export interface IUser {
  name: string;
  phone: string;
  city: string;
  street: string;
  house: string;
  email: string;
  password: string;
  comments?: [IComment];
  orders?: [IOrder];
}

import { IUser } from './user.interface';
import { IProduct } from './product.interface';

export interface IOrder {
    id: string;
    date: Date;
    user: IUser;
    product: [string, IProduct];
    total: number;
    deliveryAddress: string;
    deliveryCost: number;
    orPaid: boolean;
    whetherDelivered: boolean;
}

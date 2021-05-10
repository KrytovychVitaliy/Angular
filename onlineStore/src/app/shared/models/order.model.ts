import { IOrder } from '../interfaces/order.interface';
import { IProduct } from '../interfaces/product.interface';
import { IUser } from '../interfaces/user.interface';

export class Order implements IOrder {
    constructor(
        public id: string,
        public date: Date,
        public user: IUser,
        public product: [string, IProduct],
        public total: number,
        public deliveryAddress: string,
        public deliveryCost: number,
        public orPaid: boolean,
        public whetherDelivered: boolean
    ){}
}

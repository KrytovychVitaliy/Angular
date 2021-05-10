import { IComment } from '../interfaces/comment.interface';
import { IUser } from '../interfaces/user.interface';
import { IProduct } from '../interfaces/product.interface';


export class Comment implements IComment {
    constructor(
        public id: string,
        public text: string,
        public product: IProduct,
        public productID: string,
        public category: string,
        public autor: IUser,
        public autorEmail: string,
        public date: Date,
        public moderation: boolean
    ){}
}

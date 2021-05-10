import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
    constructor(
        public name: string,
        public phone: string,
        public city: string,
        public street: string,
        public house: string,
        public email: string,
        public password: string
    ){}
}

import { IUser } from '../interfaces/user';

export class User implements IUser {
  constructor(
    public id: string,
    public username: string,
    public email: string,
    public password: string){}
}

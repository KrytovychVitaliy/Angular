import { IUser } from '../interfaces/iuser';

export class User implements IUser {
  constructor(
    public firstName: string,
    public lastName: string,
    public phoneNum: string
  ) { }
}

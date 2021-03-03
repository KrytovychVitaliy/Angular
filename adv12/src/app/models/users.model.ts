import {IUser} from '../interfaces/iusers'

export class User implements IUser{
  constructor(
    public login: string,
    public password: string,
    public email: string,
    public id?: number,
  ){}
}

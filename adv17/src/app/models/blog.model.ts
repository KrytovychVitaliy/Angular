import { IBlog } from '../interfaces/blog';

export class Blog implements IBlog {
  constructor(
    public id: string,
    public postedBy: string,
    public topic: string,
    public date: Date,
    public message: string
    ){}
}
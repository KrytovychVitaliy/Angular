import { IBlog } from '../interfaces/blog.interface';

export class Blog implements IBlog {
  constructor(
    public autor: string,
    public title: string,
    public text: string,
    public date: Date,
    public image: string,
    public id: string,
  ) { }
}

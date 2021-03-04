import { ITasks } from '../interfaces/ITasks';

export class Tasks implements ITasks {
  constructor(
    public task: string,
    public taskStatus = false,
    public idTask?: number,
  ) { }
}

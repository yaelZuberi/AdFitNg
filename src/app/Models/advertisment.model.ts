import { Page } from "./page.model";
import { User } from "./user.model";
//post model??
export class Advertisement{
    static count: number = 0;
    userId!: number
    image?:File|null; 
    size !:Esize;
    numOfWeeks!:number;
}

export enum Esize
{
    EIGHTH = 1,
    QUARTER = 2,
    HALF = 4,
    FULL = 8
}
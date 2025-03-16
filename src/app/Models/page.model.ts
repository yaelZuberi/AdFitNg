//post model??

import { Advertisement } from "./advertisment.model";

export class Page{
    id!:number;
    pageNumber!:number;
    advertisements: Advertisement[] = [];
    capacity!:number; 
}
import { Image } from "./image";
export class Category{
    _id:number;
    title:string;
    description:string;
    image:Image;
    images:File;
    parent:string;
    disable:string;
    createdAt:string;
    updatedAt:string;
}
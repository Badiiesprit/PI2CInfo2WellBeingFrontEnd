import { Image } from "./image";
export class Category{
    _id:number;
    title:string;
    description:string;
    image:Image;
    parent:Category;
    disable:string;
    createdAt:string;
    updatedAt:string;
}
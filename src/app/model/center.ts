import { Image } from "./image";
import { Category } from "./category";

export class Center{
    _id:number;
    title:string;
    description:string;
    image:[Image];
    image_path: [string]
    category:Category;
    category_name:string;
    longitude:string;
    altitude:string;
    location:string;
    phone:string;
    email:string;
    nbVus:number;
    disable:boolean;
    createdAt:string;
    updatedAt:string;
}
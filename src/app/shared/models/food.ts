export class FoodsModel{
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean=false;
    star:number=0;
    tags!:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];
    quantity?:any=1;
}
export default class product
{
    constructor(id:number,name:string,description:string,price:number,brand:string,img?:string)
    {
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.brand=brand;
        this.img=img;
    }
    id:number;
    name:string;
    description:string;
    price:number;
    brand:string;
    img?:string="";
}
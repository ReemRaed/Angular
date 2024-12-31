import { Component } from '@angular/core';
import Category from '../../Models/category';
import { CategoryComponent } from "../category/category.component";
import { BigSaleComponent } from "../big-sale/big-sale.component";
import { RecommendedProductsComponent } from "../recommended-products/recommended-products.component";
import { RecommendedSectionComponent } from "../recommended-section/recommended-section.component";
import { ImageCursorComponent } from "../../sharedComponents/image-cursor/image-cursor.component";

@Component({
  selector: 'app-home',
  imports: [CategoryComponent, BigSaleComponent, RecommendedSectionComponent, ImageCursorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  categories:Category[];
  images:string[];

  constructor()
  {
    this.categories=[
      {id:1,name:"Electronics Sale",img:"https://f.nooncdn.com/mpcms/EN0003/assets/6d60f73d-fcb9-4199-9bc7-5a8c67670135.png?format=avif"},
      {id:2,name:"Installments Sale",img:"https://f.nooncdn.com/mpcms/EN0003/assets/c34d8f62-ca52-4b3f-b4ea-a3b751c9caf7.png?format=avif"},
      {id:3,name:"Holiday Sale",img:"https://f.nooncdn.com/mpcms/EN0003/assets/45430a68-ac0e-40f8-b8eb-627024371e8b.png?format=avif"},
      {id:4,name:"Mens Fashion",img:"https://f.nooncdn.com/mpcms/EN0003/assets/6d61f4d6-57c2-4028-b9fe-e97f8f432906.png?format=avif"},
      {id:5,name:"Kids Fashion",img:"https://f.nooncdn.com/mpcms/EN0003/assets/430a7f74-225c-49d8-9a76-348918ce6865.png?format=avif"},
      {id:6,name:"Women Fashion",img:"https://f.nooncdn.com/mpcms/EN0003/assets/11f0b54a-3273-4458-8402-77312e065250.png?format=avif"},
      {id:7,name:"Electronics Sale",img:"https://f.nooncdn.com/mpcms/EN0003/assets/6d60f73d-fcb9-4199-9bc7-5a8c67670135.png?format=avif"},
      {id:8,name:"Installments Sale",img:"https://f.nooncdn.com/mpcms/EN0003/assets/c34d8f62-ca52-4b3f-b4ea-a3b751c9caf7.png?format=avif"},
      {id:9,name:"Holiday Sale",img:"https://f.nooncdn.com/mpcms/EN0003/assets/45430a68-ac0e-40f8-b8eb-627024371e8b.png?format=avif"},
      {id:10,name:"Mens Fashion",img:"https://f.nooncdn.com/mpcms/EN0003/assets/6d61f4d6-57c2-4028-b9fe-e97f8f432906.png?format=avif"},
    ];
    this.images=[
      "product1.png",
      "product2.png",
      "product3.png",
      "product4.png",
      "product5.png",
    ]
  }


}

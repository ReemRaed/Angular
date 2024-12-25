import { Component, Input } from '@angular/core';
import product from '../../Models/product';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-recommended-products',
  imports: [ProductComponent],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.scss'
})
export class RecommendedProductsComponent {
  @Input() products!:product[]; 
  itemsPerRow:number=6;
}

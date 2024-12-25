import { Component } from '@angular/core';
import { RecommendedProductsComponent } from "../recommended-products/recommended-products.component";
import product from '../../Models/product';

@Component({
  selector: 'app-recommended-section',
  imports: [RecommendedProductsComponent],
  templateUrl: './recommended-section.component.html',
  styleUrl: './recommended-section.component.scss'
})
export class RecommendedSectionComponent {

  products: product[];

  constructor() {
    this.products =
      [new product(1, 'iPhone 15', 'Latest model with A17 chip', 999, 'Apple','img1.png'),
      new product(2, 'Samsung Galaxy S23', 'Flagship device with 200MP camera', 899, 'Samsung','img1.png'),
      new product(3, 'Google Pixel 8', 'Pixel with Google Tensor G3 chip', 799, 'Google','img1.png'),
      new product(4, 'OnePlus 11', 'Fast charging and flagship performance', 749, 'OnePlus','img1.png'),
      new product(5, 'Xiaomi 13', 'Affordable flagship with AMOLE display', 699, 'Xiaomi','img1.png'),
      new product(6, 'Oppo Find X6 Pro', 'Flagship phone with large battery and fast charging', 850, 'Oppo','img1.png'),
      new product(7, 'Realme GT 2 Pro', 'Performance-oriented flagship', 699, 'Realme','img1.png'),
      new product(8, 'Sony Xperia 1 IV', '4K display with pro camera features', 1200, 'Sony','img2.png'),
      new product(9, 'Huawei P60 Pro', 'Premium phone with Leica camera system', 950, 'Huawei','img3.png'),
      new product(10, 'Motorola Edge 40 Pro', 'Flagship with OLED display and Snapdragon 8 Gen 2', 799, 'Motorola','img4.png')];
  }
}

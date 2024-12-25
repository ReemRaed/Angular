import {  Component, Input } from '@angular/core';
import product from '../../Models/product';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product! :product;

  list:string[]=["free delivery","only 18 tablets","selling out fast","only two left in stock"];
  currentWord: string = ''; 
  currentIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentWord = this.list[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.list.length;
      console.log(this.currentWord)
    }, 2000);
  }
}

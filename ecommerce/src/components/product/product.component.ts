import { Component, ElementRef, HostListener, Input } from '@angular/core';
import product from '../../Models/product';
import { animate, style, transition, trigger } from '@angular/animations';
import { AddRemoveActionBarComponent } from "../add-remove-action-bar/add-remove-action-bar.component";

@Component({
  selector: 'app-product',
  imports: [AddRemoveActionBarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: product;
  disabled: boolean = true;
  showActionBar = false; 
  list: string[] = ["free delivery", "only 18 tablets", "selling out fast", "only two left in stock"];
  currentWord: string = '';
  currentIndex: number = 0;

  constructor(private elementRef: ElementRef) {}


  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (this.showActionBar && !this.elementRef.nativeElement.contains(event.target)) {
      this.showActionBar = false;
    }
  }


  ngOnInit() {
    setInterval(() => {
      this.currentWord = this.list[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.list.length;
      console.log(this.currentWord)
    }, 2000);
  }
  addToCart() {
    this.disabled = false;
    this.showActionBar=true;
  }

}

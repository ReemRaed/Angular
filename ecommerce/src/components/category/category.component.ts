import { Component, Input } from '@angular/core';
import Category from '../../Models/category';
@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  
  @Input() category!:Category;
  constructor(){

  }
  




}

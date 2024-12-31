import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { ForloopDirective } from '../../directives/for-loop.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-cursor',
  imports: [SliderComponent,ForloopDirective,CommonModule],
  templateUrl: './image-cursor.component.html',
  styleUrl: './image-cursor.component.scss'
})
export class ImageCursorComponent  implements OnChanges,OnInit,OnDestroy{
 
  
  @Input() images!:string[];
  start:number=1;
  condition: boolean = false;
  iteration:number=1;
  index:number=0;
  time:any;
  
  ngOnChanges(changes: SimpleChanges): void {
    this.condition=this.start<this.images.length;
    this.iteration=this.images.length;
  }

  ngOnInit(): void {
    this.time=setInterval(() => {
      this.next();
    }, 2000);
  }
  
  
  next()
  {
    if(this.index <this.images.length-1)
    {
      this.index++;
    }
    else
    {
      this.index=0;
    }
  }
  previous() {
    if (this.index > 0) {
      this.index--;
      console.log(this.index);  
    } else {
      this.index = this.images.length - 1;  
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.time);
  }
}

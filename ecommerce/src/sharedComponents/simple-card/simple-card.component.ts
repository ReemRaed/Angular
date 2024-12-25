import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  imports: [],
  templateUrl: './simple-card.component.html',
  styleUrl: './simple-card.component.scss'
})
export class SimpleCardComponent {
  // @Input() card!:Card;
  img:string="https://f.nooncdn.com/mpcms/EN0003/assets/22a2edd7-3ea7-4e9d-b971-45b71fe183be.png?format=avif";
}

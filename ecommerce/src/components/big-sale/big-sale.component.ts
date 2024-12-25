import { Component, Input } from '@angular/core';
import { SimpleCardComponent } from "../../sharedComponents/simple-card/simple-card.component";

@Component({
  selector: 'app-big-sale',
  imports: [SimpleCardComponent],
  templateUrl: './big-sale.component.html',
  styleUrl: './big-sale.component.scss'
})
export class BigSaleComponent {
  @Input() title!:string;
  @Input() backGroundColor:string="white";

}

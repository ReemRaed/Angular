import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Output() searchValue:EventEmitter<string>;
  constructor()
  {
    this.searchValue=new EventEmitter;
  }
  onEnterPressed(event:any): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.searchValue.emit(inputValue);
  }

}

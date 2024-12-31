import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, SearchBarComponent, LoginComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
   
  title:string="E-commerce";
  menuActive:boolean=false;
  showLogin:boolean=false;

  toggleMenu()
  {
    this.menuActive = !this.menuActive;
  }
  searchValue(value:string)
  {
    console.log(value)
  }
  navigateToLogin()
  {
    this.showLogin=true;
  }

  cancel()
  {
    this.showLogin=false;
  }
}

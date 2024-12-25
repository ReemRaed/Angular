import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProductComponent } from '../components/product/product.component';
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [
    {path:'',pathMatch:"full",component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'product',component:ProductComponent},
];

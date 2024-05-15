import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [

  // routes for components 
  { path: '' , component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent, title: 'AboutUs' },
  { path: 'products', component: ProductsComponent, title: 'Products' },
  { path: 'products/:category', component: ProductlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

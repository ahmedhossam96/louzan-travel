import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

import  {ProductComponent}  from  './product/product.component';

import  {ContactComponent}  from    './contact/contact.component';
import  {CategoriesComponent}  from    './categories/categories.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/landing' } ,

  { path: 'landing', component: LandingComponent } ,


  { path: 'product', component: ProductComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'categories', component: CategoriesComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

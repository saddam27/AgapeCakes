import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UserregComponent } from './components/userreg/userreg.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CheckoutComponent } from '../app/checkout/checkout.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PaymentComponent } from './payment/payment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComponent } from './components/dashboard/add/add.component';

import { DeleteComponent } from './components/dashboard/delete/delete.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/shopping-cart',
    pathMatch:'full'
  },
 
  {
    path:'shopping-cart',
    component:ShoppingCartComponent
  },
  {
    path:'login-page',
    component:LoginPageComponent
  },
  {
    path:'userreg',
    component:UserregComponent
  },
  {
    path:'Cart',
    component:CartComponent
  },
  {
    path:'CartItem',
    component:CartItemComponent

  },
  {
    path:'Check',
    component:CheckoutComponent
  },
  {
    path:'thank',
    component:ThankyouComponent
  },
  {
    path:'pay',
    component:PaymentComponent
  },
  {
    path:'dash',
    component:DashboardComponent
  },
  {
    path:'add',
    component:AddComponent
  },
  
  {
    path:'delete',
    component:DeleteComponent
  },
  {
    path:'adminlogin',
    component:AdminloginComponent
  },


  
]






@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }

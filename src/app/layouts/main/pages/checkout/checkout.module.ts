import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutConfirmComponent } from './components/checkout-confirm/checkout-confirm.component';
import { CheckoutSuccessComponent } from './components/checkout-success/checkout-success.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../../core/shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent
  },
  {
    path: 'confirm',
    component: CheckoutConfirmComponent
  },
  {
    path: 'success',
    component: CheckoutSuccessComponent
  }
];

@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutConfirmComponent,
    CheckoutSuccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CheckoutModule { }

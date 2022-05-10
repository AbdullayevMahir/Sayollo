import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {RouterModule, Routes} from "@angular/router";
import {ProductCardComponent} from './components/product-card/product-card.component';
import {SharedModule} from "../../../../core/shared/shared.module";
import {ProductService} from "./product.service";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule {
}

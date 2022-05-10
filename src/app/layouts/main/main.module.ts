import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import {SharedModule} from "../../core/shared/shared.module";
import {MainGuard} from "../../core/guards/main.guard";
import {StoreModule} from "@ngrx/store";
import {mainReducer} from "./store/reducer/main.reducer";
import {MainService} from "./components/main/main.service";
import { EffectsModule } from '@ngrx/effects';
import { MainEffects } from './store/effects/main.effects';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./pages/products/products.module').then((m) => m.ProductsModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('./pages/checkout/checkout.module').then((m) => m.CheckoutModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('main', mainReducer),
    EffectsModule.forFeature([MainEffects]),
  ],
  providers: [
    MainGuard,
    MainService
  ]
})
export class MainModule { }

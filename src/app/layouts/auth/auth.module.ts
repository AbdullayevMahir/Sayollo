import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../core/shared/shared.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)
  }
];

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }

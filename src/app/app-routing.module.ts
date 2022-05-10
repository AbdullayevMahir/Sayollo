import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainGuard} from "./core/guards/main.guard";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () => import('./layouts/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'main',
    canActivate: [MainGuard],
    loadChildren: () => import('./layouts/main/main.module').then((m) => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MainGuard, AuthGuard]
})
export class AppRoutingModule {
}

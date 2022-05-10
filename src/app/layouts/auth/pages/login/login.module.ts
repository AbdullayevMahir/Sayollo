import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../../core/shared/shared.module";
import {FormsModule} from "@angular/forms";

const router: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(router),
        FormsModule
    ]
})
export class LoginModule { }

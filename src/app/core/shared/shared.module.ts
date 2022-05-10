import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from './components/base-button/base-button.component';

@NgModule({
  declarations: [
    BaseButtonComponent
  ],
  exports: [
    BaseButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

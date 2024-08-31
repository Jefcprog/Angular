import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModallpersonasComponent } from '../modallpersonas/modallpersonas.component';



@NgModule({
  declarations: [
    LoginpersonasModule,
    ModallpersonasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginpersonasModule { }

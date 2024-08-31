import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LpersonasRoutingModule } from './lpersonas-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginlpersonasComponent } from './subcomponentes/loginlpersonas/loginlpersonas.component';
import { LpersonasComponent } from './lpersonas.component';
import { ModallpersonasComponent } from './subcomponentes/modallpersonas/modallpersonas.component';


@NgModule({
  declarations: [
    LoginlpersonasComponent,
    LpersonasComponent,
    ModallpersonasComponent,
    LpersonasComponent
  ],
  imports: [
    CommonModule,
    LpersonasRoutingModule,
    FormsModule,
    
  ],
  exports: [
    LpersonasComponent
  ],
})
export class LpersonasModule { }

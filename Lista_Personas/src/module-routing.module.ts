import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LpersonasComponent } from './app/modulos/lpersonas/lpersonas.component';
import { NotfoundComponent } from './app/modulos/general/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', 
    loadChildren: () => import('./app/modulos/lpersonas/subcomponentes/loginlpersonas/loginlpersonas.component').then(m => m.LpersonasComponent)
  },
  { path: 'creacion', 
    loadChildren: () => import('./app/modulos/lpersonas/lpersonas.component').then(m => m.LoginpersonasModule)
  },
  { path: 'personas', component: LpersonasComponent },
  { path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivaEstructuralComponent } from './directiva-estructural/directiva-estructural.component';

const routes: Routes = [
  {path: 'pipes', component: PipesComponent},
  {path: 'estructural', component: DirectivaEstructuralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

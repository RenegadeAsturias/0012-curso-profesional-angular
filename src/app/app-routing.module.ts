import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivaEstructuralComponent } from './directiva-estructural/directiva-estructural.component';
import { ListadoComponent } from './compra/listado/listado.component';
import { NuevaCompraComponent } from './compra/nueva-compra/nueva-compra.component';
import { HistorialCompraComponent } from './compra/historial-compra/historial-compra.component';

const routes: Routes = [
  {path: 'pipes', component: PipesComponent},
  {path: 'estructural', component: DirectivaEstructuralComponent},
	{ path: 'compra', component: ListadoComponent, children: [
		{ path: 'nueva', component: NuevaCompraComponent },
		{ path: 'historial', component: HistorialCompraComponent },
	]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

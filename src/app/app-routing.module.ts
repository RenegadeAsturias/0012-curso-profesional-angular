import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivaEstructuralComponent } from './directiva-estructural/directiva-estructural.component';
import { ListadoComponent } from './compra/listado/listado.component';
import { NuevaCompraComponent } from './compra/nueva-compra/nueva-compra.component';
import { HistorialCompraComponent } from './compra/historial-compra/historial-compra.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'pipes', pathMatch: 'full' },
  {path: 'pipes', component: PipesComponent},
  {path: 'estructural', component: DirectivaEstructuralComponent},
	{ path: 'compra',
    component: ListadoComponent,
    // La ruta que deseamos proteger en este caso es 'compra'
    // Le añadimos un atributo nuevo: canActivate
    // y como valores le asignamos un array con los Guards
    // que quiero que anexar a la ruta.
		canActivate: [AuthGuard], // ****************** Guard anexado
    children: [
		{ path: 'nueva', component: NuevaCompraComponent },
		{ path: 'historial', component: HistorialCompraComponent },
	]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

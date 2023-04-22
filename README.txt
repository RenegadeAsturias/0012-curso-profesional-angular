
Curso Profesional de Angular (Código Facilito) (19/04/2023)

$ ng new 0012-curso-profesional-angular

***************************************** COMPONENTES:
$ cd 0012-curso-profesional-angular
$ ng g c directiva-atributo
$ ng g c directiva-estructural
$ ng serve -o


git add .
git commit -m "Curso Profesional de Angular (Código Facilito) (19/04/2023). Inicio"

--Crear el repositorio en GitHub
git remote add origin https://github.com/RenegadeAsturias/0012-curso-profesional-angular.git
git push origin main

***************************************** PIPES:
$ ng g c pipes

Documentación de pipes:
https://angular.io/guide/pipes
https://angular.io/api/common/DatePipe

$ ng g pipe pipes/estados


***************************************** RUTAS:
(1) ¿Qué son los módulos?
Agrupación de componentes por funcionalidad.

(2) Rutas
(3) Rutas con hijos
(4) Guards
(5) Aplicando lazy loading en rutas

$ ng g m compra

#¡Ojo! Para que me añada los nuevos componentes
#al módulo 'compra' (ej:UPDATE src/app/compra/compra.module.ts)
$ cd src/app/compra

$ ng g c listado
CREATE src/app/compra/listado/listado.component.html (22 bytes)
CREATE src/app/compra/listado/listado.component.spec.ts (606 bytes)
CREATE src/app/compra/listado/listado.component.ts (206 bytes)
CREATE src/app/compra/listado/listado.component.css (0 bytes)
UPDATE src/app/compra/compra.module.ts (278 bytes)

$ ng g c nuevaCompra
$ ng g c historialCompra

@NgModule({
  declarations: [
    ListadoComponent, ************** Componente 'listado' actualizado
    NuevaCompraComponent, ********** Componente 'nuevaCompra' actualizado
    HistorialCompraComponent ******* Componente 'historialCompra' actualizado
  ],
  imports: [
    CommonModule
  ]
})
export class CompraModule { }


************************************************************
#Ahora quiero utilizar uno de mis nuevos componentes del módulo 'compra'
#Y en 'app.component.html' añado el selector: 'app-listado',

<h1>Listado de Compras</h1>
<app-listado></app-listado>

#Pero el compilador me da error
'app-listado' is not a known element:
1. If 'app-listado' is an Angular component, then verify that it is part of this module.

#Aún no puedo utilizar el módulo 'compra' tengo que registrarlo en:
scr > app > app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    DirectivaAtributoComponent,
    DirectivaEstructuralComponent,
    PipesComponent,
    EstadosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CompraModule ******************* Módulo 'compra' registrado
  ],
... ... ... ...

#El error persiste:
'app-listado' is not a known element:
1. If 'app-listado' is an Angular component, then verify that it is part of this module.

#Los Componentes están registrados en el módulo 'compra'
#pero son propios de este módulo y por defecto
#otros módulos no pueden utilizarlos como en este caso
#porque puede ser que en realidad queramos eso, que nuestros componentes
#sólo deben ser vistos por un componente y no sean vistos por el resto de módulos.
#Para solucionarlo, en el módulo 'compra' hay que exportar
#los componentes que pueden ser vistos por otros módulos:

@NgModule({
  declarations: [
    ListadoComponent,
    NuevaCompraComponent,
    HistorialCompraComponent
  ],
  exports: [
    ListadoComponent  ********* Exportar los componentes
                      ********* visibles para otros módulos
  ],
  imports: [
    CommonModule
  ]
})
export class CompraModule { }

#Ahora ya funciona correctamente la llamada al componente:
<h1>Listado de Compras</h1>
<app-listado></app-listado>
√ Compiled successfully.


#Entonces como el componente del módulo 'compra': NuevaCompraComponent
#no ha sido exportado no podría hacer:
src > app > app.component.html
<h1>Nueva Compra</h1>
<app-nueva-compra></app-nueva-compra>

#Pero si podría utilizarlo dentro de los componentes
#correspondientes al módulo 'compra'.
#Esto funciona:
src > app > compra > listado > listado.component.html
<h1>Nueva Compra</h1>
<app-nueva-compra></app-nueva-compra>

******************************************************************

Creamos un nuevo módulo que va a trabajar con la ruta de nuestro proyecto:
$ ng g m AppRouting
CREATE src/app/app-routing/app-routing.module.ts

Como yo ya había creado el proyecto y le dije que habilitase Routing Y
ya tengo creado el módulo para las rutas en:

src > app > app-routing.module.ts

Tendremos esto:

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

------------------------------------------------------------

#Añadimos las rutas en:
const routes: Routes = [
    {path: 'pipes', PipesComponent: }
];

Para que funcione, tecleamos en la url del navegador
http://localhost:4200/pipes

Pero aún no se muestra nada, nos vamos:

src > app > app.component.hml

Comentamos todo lo que teníamos y añadimos:

<router-outlet></router-outlet>

ahora volvemos a escribir:
src > app > app.component.hml

Y ya vemos el contenido de nuestro componente:
scr > app > pipes > pipes.component.html
desplegado en el contenedor:
<router-outlet></router-outlet>

Pipe titlecase: René
Pipe upppercase: RENÉ
Pipe date: Feb 20, 2020

------------------------------------------------------------

#Añadimos otra ruta en:
const routes: Routes = [
  {path: 'pipes', component: PipesComponent},
  {path: 'estructural', component: DirectivaEstructuralComponent}
];

Para que funcione, tecleamos en la url del navegador
http://localhost:4200/esctructural

------------------------------------------------------------

Vamos a implementar un botón para ir
desde la página de Pipes para ir a Estructural:

<button [routerLink]="['/estructural']">Ir a Componente Estructural</button>

Y ahora añadimos otro nuevo botón
y vemos el atributo: routerLinkActive
que nos ayuda a identificar la ruta activa
y le asociamos un estilo para que se identifique que estamos en ella.

<button [routerLink]="['/estructural']" routerLinkActive="seccionActiva">Ir a Componente Estructural</button>
<button [routerLink]="['/pipes']" routerLinkActive="seccionActiva">Ir a Componente Estructural</button>

------------------------------------------------------------

Cambimos de lugar los botones de cambios de rutas para que nos sirvan
en modo navegación, en:

src > app > app.component.html

<button [routerLink]="['/estructural']" routerLinkActive="seccionActiva">Ir a Componente Estructural</button>
<button [routerLink]="['/pipes']" routerLinkActive="seccionActiva">Ir a Componente Estructural</button>
<router-outlet></router-outlet>

------------------------------------------------------------










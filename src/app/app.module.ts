import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivaAtributoComponent } from './directiva-atributo/directiva-atributo.component';
import { DirectivaEstructuralComponent } from './directiva-estructural/directiva-estructural.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaAtributoComponent,
    DirectivaEstructuralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

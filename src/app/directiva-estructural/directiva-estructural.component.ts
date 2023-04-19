import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-estructural',
  templateUrl: './directiva-estructural.component.html',
  styleUrls: ['./directiva-estructural.component.css']
})
export class DirectivaEstructuralComponent implements OnInit {

  isError = false;

  secciones = [
    'Introduccón',
    'Usos de Angular',
    'Instalación del entorno',
    'CLI',
    'Componentes'
  ];

  seccionesAvanzadas = [
    {id: 1, name: 'Introduccón', duracion: '3'},
    {id: 2, name: 'Usos de Angular', duracion: '5'},
    {id: 3, name: 'Instalación del entorno', duracion: '9'},
    {id: 4, name: 'CLI', duracion: '7'},
    {id: 5, name: 'Componentes', duracion: '4'}
  ];

  constructor() { }

  ngOnInit(): void {
    console.log("Inicio!");
    /** Genero un error a partir de un temporizador:
    setTimeout(()=> {
      this.isError = true;
    }, 4000); */
  }

  showError(): void {
    this.isError = !this.isError;
  }

}

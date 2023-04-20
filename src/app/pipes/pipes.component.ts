import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  nombre = "rené";

  fecha = '2020-02-20T13:59:31.238Z'; // Formato Timestamp

  estado = 0;

  cambiarEstado() {
    this.estado = this.estado == 0 ? 1 : 0;
  }

}

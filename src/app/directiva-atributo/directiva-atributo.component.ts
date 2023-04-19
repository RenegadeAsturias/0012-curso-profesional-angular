import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-atributo',
  templateUrl: './directiva-atributo.component.html',
  styleUrls: ['./directiva-atributo.component.css']
})
export class DirectivaAtributoComponent implements OnInit {

  messageType = 'info';
  messageTypeNum = 1000;

  inputValue = "Hola";

  ngOnInit(): void {
  }

}

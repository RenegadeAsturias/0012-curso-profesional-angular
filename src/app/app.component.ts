import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '0012-curso-profesional-angular';

	constructor() { // Simulamos el Id del usuario.
		localStorage.setItem('id', '9999');
	}

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Debajo de los dos parámetros que recibe el método
	  // Introducimos la lógica de negocio que verifica si accedemos o no
	  // Como valor devuelto más típico, devolvemos un booleano.

    const id = localStorage.getItem('id');
    return id === '1234';
  }

}

import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GuardService implements CanActivate {

  constructor(private autenticacionService: AutenticacionService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.autenticacionService.isAuthenticated();
  }
}

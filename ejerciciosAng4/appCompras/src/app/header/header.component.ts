import { Component } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }



    isAuth() {
      return this.autService.isAuthenticated();
    }

    onLogout() {
      this.autService.logout();
      this.router.navigate(['/'])
      }

}

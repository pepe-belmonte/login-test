import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthTokenService } from '../../services/auth-token.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLogged:boolean = false;

  constructor(
    private auth: AuthTokenService
  ) {
    // observable para comprobar si hay cambios en el login
    this.auth.getLogged().subscribe((res: boolean) => {
      this.isLogged = res;
    });

  }
  
  logout() {
    this.auth.logout();
  }

}

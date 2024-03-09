import { Component } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { NgIf } from '@angular/common';
import { AuthTokenService } from '../../../shared/services/auth-token.service';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    NgIf,
    CardComponent
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {
  isLogged: boolean = false;
  userData: any = {};
  imageSelected: string = '';

  constructor(
    private auth: AuthTokenService) 
  {
    // observable para comprobar si hay cambios en el login
    this.auth.getLogged().subscribe((res: boolean) => {
      this.isLogged = res;
      if (this.isLogged) {
        this.userData = this.auth.getToken();
        console.log (this.userData);
      }
    });

  }

  onImageSelected($event:string) {
    if (this.imageSelected == $event) {
      this.imageSelected = '';
    }else {
      this.imageSelected = $event;
    }
  }

}

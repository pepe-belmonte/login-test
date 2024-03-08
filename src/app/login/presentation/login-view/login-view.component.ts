import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtilsService } from '../../../shared/services/form-utils.service';
import { LoginInterface } from '../../../shared/models/login.model';
import { LoginService } from '../../../shared/apis/login.service';
import { LoginUserDTO } from '../../../shared/interfaces/login-user.dto';

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.scss'
})
export class LoginViewComponent {

  formLogin: FormGroup;
  formRegister: FormGroup;
  isLoading: boolean = false;
  isShakeForm: boolean = false; // hay que sacudir el formulario?

  constructor(
    public formUtils: FormUtilsService,
    private apiUser: LoginService
  ) {
    this.formLogin = new FormGroup({
      username: new FormControl<string>('',[Validators.required]),
      password: new FormControl<string>('',[Validators.required])
    })
    this.formRegister = new FormGroup({
      username: new FormControl<string>('',[Validators.required]),
      email: new FormControl<string>('',[Validators.required]),
      name: new FormControl<string>('',[Validators.required]),
      surname: new FormControl<string>(''),
      password: new FormControl<string>('',[Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.formLogin.markAllAsTouched();
    this.formLogin.updateValueAndValidity();
    if (this.formLogin.valid) {
      const loginData: LoginInterface= {
        username : this.formLogin.get('username')?.value,
        password : this.formLogin.get('password')?.value
      }
      debugger;
      this.getLoginUser(loginData);

    }else {
      console.log ('formulario con errores');
      this.isShakeForm =true; // agita el formulario
      setTimeout(() => {
        this.isShakeForm =false;
      }, 1000);
    }
  }

  getLoginUser(loginData: LoginInterface) {
    this.isLoading= true;
    this.apiUser.userLogin(loginData).subscribe({
      next: (res: LoginUserDTO) => {
        this.isLoading= false;
        debugger;
      },
      error: (err: any) => {
        this.isLoading= false;
        console.error(err);
        if (err.status == 401) {
          this.formLogin.get('password')?.setErrors({
            loginError: err?.error
          })
        }else {
          console.log ('Error no controlado');
          this.formLogin.get('password')?.setErrors({
            loginError: err?.message
          })
        }
      }
    })

  }
}

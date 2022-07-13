import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './helpers/auth.service';
import { Router } from '@angular/router';
import { IUser } from '../main-page/styles-building/interfaces';
import { catchError, Subject } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public hide = true;
  public loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  submitForm(): void{
    if (this.loginForm.invalid) return;
    const user: IUser = this.loginForm.value;

    this.authService.login(user)
      .subscribe(
        (res) => {
          localStorage.setItem('auth', res.accessToken);
          localStorage.setItem('username', res.email);
          this.router.navigate(['/']).then(r => console.log(r));
        }
      )
  }

}

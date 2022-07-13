import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './helpers/auth.service';
import { IUser } from '../main-page/styles-building/interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent{

  public hide = true;
  public loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  submitForm(): void {
    if (this.loginForm.invalid) return;
    const user: IUser = this.loginForm.value;

    this.authService.login(user)
      .subscribe(
        {
          next: (res) => {
            localStorage.setItem('auth', res.accessToken);
            localStorage.setItem('username', res.email);
            this.router.navigate(['/']).then(r => console.log(r));
          },
          error: error => {
            console.log('error', error)
          }
        }
      )
  }
}

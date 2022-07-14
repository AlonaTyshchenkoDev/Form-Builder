import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../helpers/auth.service';
import { IUser } from '../../main-page/styles-building/interfaces';
import { ItemsService } from '../../../services/items.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent{

  public hide: boolean = true;
  public message: string;
  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private itemService: ItemsService,
    private alert: AlertService
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
            localStorage.setItem('login', res.user.login);
            this.itemService.userName$.next(localStorage.getItem('login'));
            this.router.navigate(['/']).then();
          },
          error: error => {
            this.message = error['error'];
            this.alert.warning(this.message);
          }
        }
      )
  }
}

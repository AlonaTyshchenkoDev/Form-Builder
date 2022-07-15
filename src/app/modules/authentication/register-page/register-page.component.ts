import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../helpers/auth.service';
import { IUser } from '../../main-page/interfaces';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent{

  public message: string;
  public hide: boolean = true;
  public registerForm: FormGroup = this.formBuilder.group({
    login: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alert: AlertService
  ) {
  }

  submitForm(): void{
    if (this.registerForm.invalid) return;
    const newUser: IUser = this.registerForm.value;
    this.authService.register(newUser)
      .subscribe(
        {
          next: (res) => {
            this.router.navigate(['/login']).then();
          },
          error: error => {
              this.message = error['error'];
              this.alert.warning(this.message);
          }
        }
      )
  }
}

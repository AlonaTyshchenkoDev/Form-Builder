import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './helpers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  public hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  submitForm(): void {
    if (this.loginForm.invalid) return;

    const value = this.loginForm.value;
    this.authService.logIn(value.email, value.password)
      .subscribe(
        (res) => {
          console.log('User is Log In', res);
          this.router.navigate(['/']).then(r => console.log(r));
        }
      )
  }

}

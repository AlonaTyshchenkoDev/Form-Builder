import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]),
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: []
})
export class LoginModule {
}

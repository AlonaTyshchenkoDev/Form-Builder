import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './modules/login-page/helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/main-page/main.module').then(
        (m) => m.MainModule
      )
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login-page/login.module').then(
        (m) => m.LoginModule
      )
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

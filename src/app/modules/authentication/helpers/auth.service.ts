import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ApiUrlLogin, ApiUrlRegister } from './consants';
import { IUser } from '../../main-page/interfaces';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  login(user: IUser): Observable<{accessToken: string,user: {email:string, id:string, login: string}}>{
    return this.http.post<{accessToken: string,user: {email:string, id:string, login: string}}>(ApiUrlLogin, user);
  }

  register(user: IUser): Observable<{accessToken: string,user: {email:string, id:string, login: string}}>{
    return this.http.post<{accessToken: string,user: {email:string, id:string, login: string}}>(ApiUrlRegister, user);
  }

  logOut(): void{
    localStorage.clear();
    this.router.navigate(['/login']).then();
  }

  isAuthenticated(): boolean{
    if(localStorage.getItem('auth')) return true;

    return false;
  }
}

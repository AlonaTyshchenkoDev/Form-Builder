import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { ApiUrlLogin, ApiUrlRegister } from './consants';
import { IUser } from '../../main-page/styles-building/interfaces';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  login(user: IUser): Observable<{email:string, accessToken: string, id: number}>{
    return this.http.post<{email:string, accessToken: string, id: number}>(ApiUrlLogin, user);
  }

  register(user: IUser): Observable<{email:string, accessToken: string, id: number}>{
    return this.http.post<{email:string, accessToken: string, id: number}>(ApiUrlRegister, user);
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

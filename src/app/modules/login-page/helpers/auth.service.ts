import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { ApiUrl } from './consants';
import { IUser } from '../../main-page/styles-building/interfaces';

@Injectable({providedIn: 'root'})
export class AuthService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  login(user: IUser): Observable<{email:string, accessToken: string, id: number}>{
    return this.http.post<{email:string, accessToken: string, id: number}>(ApiUrl, user);
  }

  logOut(): void{
    localStorage.clear();
    this.router.navigate(['/login']).then();
  }

  isAuthenticated(): boolean{
    if(localStorage.getItem('auth')) return true;

    return false;
  }

  catchError(error:HttpErrorResponse): Observable<string>{
    const {message} = error.error.error;
    switch(message) {
      case 'Incorrect username or password':
        this.error$.next('Incorrect username or password')
        break;
      case 'Error in authorization format':
        this.error$.next('There are no such users')
        break;
    }
    return throwError(error);
  }
}

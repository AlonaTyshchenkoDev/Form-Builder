import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthApi } from './consants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post(AuthApi, {email, password});
  }
}

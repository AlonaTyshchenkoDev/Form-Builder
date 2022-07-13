import { HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

export const AuthApi: string = 'http://localhost:3000/users';
export const TOKEN_NAME: string = 'JWT token';
export const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
export const TOKEN_KEY = 'auth-token';
export const TOKEN_HEADER_KEY = 'Authorization';
export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];


export const FAKE_JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InRlc3QgZm9ybSBCdWlsZCIsImlhdCI6MTcyNzM3OTc1M30.odCkr3Xe9LXXjNNCu_IDhtNpbm4876Cbb61cOEjiP4Q';

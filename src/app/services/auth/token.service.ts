import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly ACCES_TOKEN_KEY = 'tienda_token';
  private readonly REFRESH_TOKEN_KEY = 'tienda_refresh_token';

  constructor(
    private cookieService: CookieService, 
  ) { }

  saveToken(token: string, refreshToken: string): void {
    this.cookieService.set(this.ACCES_TOKEN_KEY, token,{
      path: "/",
      secure: environment.tokenSecure, // En produccion esto tiene que poner TRUE
      sameSite: "Strict"
    })
    this.cookieService.set(this.REFRESH_TOKEN_KEY, refreshToken,{
      path: "/",
      secure: environment.tokenSecure, // En produccion esto tiene que poner TRUE
      sameSite: "Strict"
    })
  }

  getAccessToken(): string {
    return this.cookieService.get(this.ACCES_TOKEN_KEY);
  }

  getRefreshToken(): string {
    return this.cookieService.get(this.REFRESH_TOKEN_KEY);
  }

  removeToken(): void {
    this.cookieService.delete(this.ACCES_TOKEN_KEY, '/', '', false, 'Strict'); // En produccion esto tiene que poner TRUE
    this.cookieService.delete(this.REFRESH_TOKEN_KEY,  '/', '', false, 'Strict'); // En produccion esto tiene que poner TRUE
  }

}

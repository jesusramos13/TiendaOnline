import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {LoginInterface, UserInterface} from '../interfaces/auth';

// Definicion de interfaces para las respuestas de la API
interface LoginResponse {
  token: string;
  user: UserInterface;
}

interface RegisterResponse {
  id: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private readonly apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  /**
   * Realiza una solicitud de inicio de sesión.
   * @param credentials Credenciales del usuario.
   * @returns Observable con la respuesta del servidor.
   */
  login(credentials: LoginInterface): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

  /**
   * Realiza una solicitud de registro de usuario.
   * @param userData Datos del usuario a registrar.
   * @returns Observable con la respuesta del servidor.
   */
  register(userData: UserInterface): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/register`, userData);
  }
}
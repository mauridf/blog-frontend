import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:44318/auth';
  private readonly userKey = 'blog_user';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  logout(): void {
    localStorage.removeItem('blog_user');
    localStorage.removeItem('blog_username');
    localStorage.removeItem('blog_token');
  }

  getCurrentUserId(): string | null {
    return localStorage.getItem(this.userKey);
  }
}

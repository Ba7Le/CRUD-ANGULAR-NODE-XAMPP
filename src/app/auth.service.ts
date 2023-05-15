import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  register(username: string, password: string) {
    const url = `${this.apiUrl}/register`;
    const data = { username, password };

    this.http.post<any>(url, data).subscribe(
      response => {
        if (response.success) {
          // Registration successful, redirect to login
          this.router.navigate(['/login']);
        } else {
          console.log(response.message);
        }
      },
      error => {
        console.log('An error occurred:', error);
      }
    );
  }

  login(username: string, password: string) {
    const url = `${this.apiUrl}/login`;
    const data = { username, password };

    this.http.post<any>(url, data).subscribe(
      response => {
        if (response.success) {
          // Login successful, store token and redirect to dashboard
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        } else {
          console.log(response.message);
        }
      },
      error => {
        console.log('An error occurred:', error);
      }
    );
  }

  logout() {
    // Clear token from local storage and redirect to login
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    // Check if token exists in local storage
    return !!localStorage.getItem('token');
  }

}

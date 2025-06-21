import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private userNameSubject = new BehaviorSubject<string>(localStorage.getItem('username') || '')
  username$ = this.userNameSubject.asObservable()

  constructor(private router: Router) {
  }

  login(username: string, password: string): boolean {
    if (username && password) {
      localStorage.setItem('username', username);
      localStorage.setItem('token', 'dumy token');

      this.userNameSubject.next(username);
      this.isLoggedInSubject.next(true);

      return true;
    }
    return false
  }

  logout() {
    this.router.navigate(['/Login']);

    localStorage.removeItem('username');
    localStorage.removeItem('token');

    this.userNameSubject.next('');
    this.isLoggedInSubject.next(false);
  
  }

  hasToken(): boolean{
    return !!localStorage.getItem('token');
  }
}

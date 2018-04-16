import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { User } from './user';

@Injectable()
export class UserService {
  token: string;
  user: User;
  user$ = new BehaviorSubject<User>(undefined);

  constructor(private http: Http) {
    // set token if saved in local storage
    this.token = localStorage.getItem('token');
  }

  login(user: User): Observable<void> {
    return this.http.post('/api/auth', { username: user.username, password: user.password })
      .map(res => {
        // login successful if there's a jwt token in the response
        const token = res.json() && res.json().token;
        if (token) {
          // set token property
          this.token = token;
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', token);
          this.user = { username: user.username, password: null };
          this.user$.next(this.user);
        }
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    this.user = null;
    this.user$.next(null);
    localStorage.removeItem('token');
  }

  private getUser(): void {
    if (!this.token) {
      this.user$.next(null);
      this.user = null;
      return;
    }

    this.http.post('/api/user', { token: this.token })
      .map(res => res.json())
      .subscribe(
        user => {
          this.user = user;
          this.user$.next(user);
        },
        () => {
          this.user = null;
          this.user$.next(null);
        }
      );
  }

  getUser$(): Observable<User> {
    if (this.user ===  undefined) {
      this.getUser();
    }
    return this.user$.asObservable();
  }

  getToken(): string {
    return this.token;
  }

  isLoggedIn(): boolean {
    return !!this.user && !!this.user.username;
  }

}

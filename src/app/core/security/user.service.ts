import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from './user';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  user$ = new BehaviorSubject<User>(undefined);

  constructor(private http: HttpClient) {}

  login(login, password): Observable<User> {
    return this.http.post<User>('/api/users/login', { login, password })
      .pipe(tap(userReceived => this.user$.next(userReceived)));
  }

  logout(): void {
    this.user$.next(null);
    localStorage.removeItem('token');
  }

  private getUser(): void {
    this.http.get<User>('/api/users/refreshConnected').subscribe(
      user => this.user$.next(user),
      () => this.user$.next(null)
    );
  }

  getUser$(): Observable<User> {
    if (this.user$.getValue() ===  undefined) {
      this.getUser();
    }
    return this.user$.asObservable();
  }

  isLoggedIn(): boolean {
    return !!this.user$.getValue();
  }

}

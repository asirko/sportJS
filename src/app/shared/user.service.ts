import { Injectable } from '@angular/core';

import { Observable ,  BehaviorSubject ,  of } from 'rxjs';

import { User } from './user';
import { catchError, filter, finalize, share, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  private user$ = new BehaviorSubject<User>(undefined);

  private refreshConnected = this.http.get<User>('/api/users/refreshConnected').pipe(
    catchError(() => of(null)),
    tap(user => this.user$.next(user)),
    share()
  );

  constructor(private http: HttpClient) {}

  login(login, password): Observable<User> {
    return this.http.post<User>('/api/users/login', { login, password })
      .pipe(tap(userReceived => this.user$.next(userReceived)));
  }

  logout(): void {
    this.http.get('/api/users/logout').pipe(finalize(() => {
      this.user$.next(null);
      localStorage.removeItem('token');
    })).subscribe();
  }

  getUser$(): Observable<User> {
    if (this.user$.getValue() ===  undefined) {
      this.refreshConnected.subscribe();
    }
    return this.user$.asObservable().pipe(
      filter(u => u !== undefined)
    );
  }

  isLoggedIn(): boolean {
    return !!this.user$.getValue();
  }

}

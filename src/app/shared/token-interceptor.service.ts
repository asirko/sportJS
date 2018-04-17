import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

export const LOCAL_TOKEN = 'localToken';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentToken = localStorage.getItem(LOCAL_TOKEN);
    if (currentToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentToken}`
        }
      });
    }

    return next.handle(request).pipe(
      tap(event => this.extractToken(event)),
      catchError(err => this.handleErrors(err))
    ) ;
  }

  extractToken(event: HttpEvent<{ data: any, token: string }>): void {
    if (event instanceof HttpResponse) {
      const authorization = event.headers.get('Authorization');
      const arr = authorization && authorization.match(/^Bearer (.*)$/);
      if (arr && arr.length >= 2) {
        localStorage.setItem(LOCAL_TOKEN, arr[1]);
      }
    }
  }

  handleErrors(err: HttpErrorResponse) {
    if (err.status === 401) {
      this.router.navigate(['/']);
      return of(new HttpResponse({body: null, status: 200}));
    }
    return ErrorObservable.create(err);
  }

}

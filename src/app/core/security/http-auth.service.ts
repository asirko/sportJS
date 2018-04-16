import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';

import { UserService } from './user.service';

@Injectable()
export class HttpAuthService {

  static addTokenToHeaders(accessToken, options: RequestOptionsArgs = new RequestOptions()): RequestOptionsArgs {
    if (!options.headers) {
      options.headers = new Headers();
    }
    options.headers.append('Authorization', `Bearer ${accessToken}`);
    return options;
  }

  static addApplicationJsonContent(options: RequestOptionsArgs = new RequestOptions()): RequestOptionsArgs {
    if (!options.headers) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json');
    return options;
  }

  constructor(private http: Http,
              private router: Router,
              private userService: UserService) { }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.findAccessToken()
      .mergeMap(token => this.http.get(url, HttpAuthService.addTokenToHeaders(token, options)));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.findAccessToken()
      .mergeMap(token => this.http.post(url, body,
                                        HttpAuthService.addApplicationJsonContent(
                                          HttpAuthService.addTokenToHeaders(token, options))));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.findAccessToken()
      .mergeMap(token => this.http.delete(url, HttpAuthService.addTokenToHeaders(token, options)));
  }

  private findAccessToken(): Observable<any> {
    const token = this.userService.getToken();
    if (!token) {
      this.router.navigate(['/home']);
      return Observable.empty();
    }
    return Observable.of(token);
  }

}

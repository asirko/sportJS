import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService,
              private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    return this.userService.user$
      .filter(u => u !== undefined)
      .map(u => u !== null)
      .do(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/home']);
        }
      });
  }
}

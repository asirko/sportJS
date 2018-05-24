import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService,
              private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.userService.isLoggedIn()) {
      return true;
    }

    return this.userService.getUser$().pipe(
      filter(user => user !== undefined),
      map(user => {
        if (!user) {
          this.router.navigate(['/home']);
        }
        return !!user;
      })
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../../shared/user';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'sp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.user$ = this.userService.getUser$();
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.router.navigate(['/login'])
      .then(() => this.userService.logout());
  }

}

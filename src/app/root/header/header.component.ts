import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../security/user.service';
import { User } from "../../security/user";
import { Observable } from 'rxjs/Observable';

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
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}

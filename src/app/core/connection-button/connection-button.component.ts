import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user';


@Component({
  selector: 'sp-connection-button',
  templateUrl: './connection-button.component.html',
  styleUrls: ['./connection-button.component.scss']
})
export class ConnectionButtonComponent implements OnInit {

  constructor(private router: Router,
              private elementRef: ElementRef,
              private userService: UserService) { }

  ngOnInit() {
    const newRoute$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
    const user$ = this.userService.getUser$();

    // as layout is routing he is initiated after the first navigationEnd got fired
    user$.pipe(first())
      .subscribe(user => this.manageButtonDisplay(user));
    // then each rout event and each user modification must be checked
    combineLatest(newRoute$, user$)
      .subscribe(([navEnd, user]) => this.manageButtonDisplay(user));
  }

  private manageButtonDisplay(user: User): void {
    if (this.router.url === '/login' || user) {
      this.elementRef.nativeElement.style.display = 'none';
    } else {
      this.elementRef.nativeElement.style.display = 'flex';
    }
  }

}

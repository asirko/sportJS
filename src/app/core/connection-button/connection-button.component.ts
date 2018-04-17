import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { filter } from 'rxjs/operators';
import { UserService } from '../../shared/user.service';


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
    const newRoute = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
    const user$ = this.userService.getUser$();
    combineLatest(newRoute, user$, (event, user) => user).subscribe(user => {
      if (this.router.url === '/login' || user) {
        this.elementRef.nativeElement.style.display = 'none';
      } else {
        this.elementRef.nativeElement.style.display = 'flex';
      }
    });
  }

}

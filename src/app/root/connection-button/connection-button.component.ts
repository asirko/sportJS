import {Component, OnInit, ElementRef} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {UserService} from '../../security/user.service';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/filter";

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
    const newRoute = this.router.events.filter(event => event instanceof NavigationEnd);
    const user$ = this.userService.getUser$();
    Observable
      .combineLatest(newRoute, user$, (event, user) => user)
      .subscribe(user => {
        if (this.router.url === '/login' || user) {
          this.elementRef.nativeElement.style.display = 'none';
        } else {
          this.elementRef.nativeElement.style.display = 'flex';
        }
      });
  }

}

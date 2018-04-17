import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFail = false;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    })
  }

  login(): void {
    this.userService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        () => this.router.navigate(['/home']),
        () => this.loginFail = true
      );
  }

}

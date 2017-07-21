import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HttpAuthService } from './http-auth.service';
import {AuthGuard} from "./auth.guard";

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [
    UserService,
    HttpAuthService,
    AuthGuard
  ],
  declarations: [LoginComponent]
})
export class SecurityModule { }

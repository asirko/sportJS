import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HttpAuthService } from './http-auth.service';

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [
    AuthGuard,
    UserService,
    HttpAuthService
  ],
  declarations: [LoginComponent]
})
export class SecurityModule { }

import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [
    AuthGuard,
    UserService
  ],
  declarations: [LoginComponent]
})
export class SecurityModule { }

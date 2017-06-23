import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootModule } from './root/root.module';
import { SecurityModule } from './security/security.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RootModule,
    SecurityModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

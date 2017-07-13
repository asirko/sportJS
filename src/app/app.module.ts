import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { RootModule } from './root/root.module';
import { SecurityModule } from './security/security.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RootModule,
    SecurityModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }

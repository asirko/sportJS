import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootModule } from './root/root.module';
import { SecurityModule } from './security/security.module';

import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
  declarations: [AppComponent],
  imports: [
    RootModule,
    SecurityModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

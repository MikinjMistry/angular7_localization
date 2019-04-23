import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeHi from '@angular/common/locales/hi';

import { AppComponent } from './app.component';
registerLocaleData(localeEn, 'es');
registerLocaleData(localeHi, 'hi');
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    // AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'hi' },
    { provide: LOCALE_ID, useValue: 'en' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

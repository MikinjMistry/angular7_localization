import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'localization';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }
}

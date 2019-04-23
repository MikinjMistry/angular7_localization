import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, MissingTranslationStrategy } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// use the require method provided by webpack
declare const require;

// we use the webpack raw-loader to return the content as a string
const translationsEN = require(`raw-loader!./local/messages.en.xlf`);
const translationsHI = require(`raw-loader!./local/messages.hi.xlf`);

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule, {
  missingTranslation: MissingTranslationStrategy.Error,
  providers: [
    { provide: TRANSLATIONS, useValue: translationsEN },
    { provide: TRANSLATIONS, useValue: translationsHI },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
  ]
})
  .catch(err => console.error(err));
});

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

window['enablePM'] = function() {
    localStorage.setItem('isProdModeEnabled', 'true');
    location.reload();
};
window['disablePM'] = function() {
    localStorage.setItem('isProdModeEnabled', 'false');
    location.reload();
};

const isProdModeEnabled = localStorage.getItem('isProdModeEnabled');
if (isProdModeEnabled === 'true') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

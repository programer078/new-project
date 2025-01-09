import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules, } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular,  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {  clipboard, } from 'ionicons/icons';

import { routes } from './app/app.routes';
import { register } from 'swiper/element/bundle';
register();

import { AppComponent } from './app/app.component';addIcons({
'clipboard':clipboard,
})
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
],
});
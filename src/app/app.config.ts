import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), //->// "Make routing available everywhere"
    provideHttpClient(), //-> this to provide it from the beginning in order to use it in injet()
    //->"Make HttpClient available everywhere"
  ]
};

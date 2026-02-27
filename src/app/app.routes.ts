import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'countries',
    loadChildren: () => import('./features/countries/countries-module')
      .then(m => m.CountriesModule)
  },
  {
    path: '',
    redirectTo: '/countries',
    pathMatch: 'full'
  }
];

//When someone visits /countries, lazily load the CountriesModule
//When someone visits the root URL (/), redirect to /countries
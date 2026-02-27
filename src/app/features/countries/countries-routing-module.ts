import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesList } from './countries-list/countries-list';

const routes: Routes = [
  {
    path: '',
    component: CountriesList 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }

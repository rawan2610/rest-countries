import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing-module';
import { CountriesList } from './countries-list/countries-list';


@NgModule({
  declarations: [CountriesList],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
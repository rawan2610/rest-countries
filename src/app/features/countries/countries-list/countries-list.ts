import { Component } from '@angular/core';

@Component({
  selector: 'app-countries-list',
  //imports: [],
  templateUrl: './countries-list.html',
  styleUrl: './countries-list.scss',
  standalone:true,
})
//this is the main component that will show the list of countries
//it should be added to countries module (since we're inside the features/countries folder)
//but sometimes it is not automatically added to the countries module 
//to check : cat src/app/features/countries/countries-module.ts
//and to add it : manually import it in countries-module.ts
export class CountriesList {

}

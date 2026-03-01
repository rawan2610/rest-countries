import { Component, inject,OnInit } from '@angular/core';
import { CountriesApiService } from '../../../core/services/countries-api.service';
import { Country } from '../../../core/models/country';
//import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-countries-list',
  imports: [DecimalPipe],
  templateUrl: './countries-list.html',
  styleUrl: './countries-list.scss',
  standalone: true,
})
//this is the main component that will show the list of countries
//it should be added to countries module (since we're inside the features/countries folder)
//but sometimes it is not automatically added to the countries module
//to check : cat src/app/features/countries/countries-module.ts
//and to add it : manually import it in countries-module.ts

export class CountriesList implements OnInit{
  private countriesApi = inject(CountriesApiService);
  //It gives your component access to the CountriesApiService so you can use its methods (like getAllCountries()).

  countries : Country[]=[];
  dataLoading = true;
  error='';

  ngOnInit() {
    this.fetchCountries();
  }

   private fetchCountries() {
    this.countriesApi.getAllCountries().subscribe({
      next: (data) => {
        this.countries = data; 
        this.dataLoading = false;
        console.log('Countries loaded:', data);
      },
      error: (err) => {
        this.error = 'Failed to load countries';
        this.dataLoading = false;
        console.error('Error:', err);
      }
    });
  }

}

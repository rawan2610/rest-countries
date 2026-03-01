import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesApiService {
  private http = inject(HttpClient);
  private apiUrl = 'https://restcountries.com/v3.1';

  getAllCountries() {
    const fields = 'name,capital,region,population,flags';
    return this.http.get<Country[]>(`${this.apiUrl}/all?fields=${fields}`);
  }

  getCountryByCode(code: string) {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`);
  }
  //Note : is there a difference between <Country> and <Country[]>?
  //<Country> -> single object , so, 1 country !
  // <Country[]> -> array of objects ,so, many countries!

  getByRegion(region: string) {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`);
  }
}

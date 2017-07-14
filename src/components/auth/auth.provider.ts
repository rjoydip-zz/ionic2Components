import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { AUTH } from './auth.config';
import { countries } from './data/mock.countries';

@Injectable()
export class AuthProvider {
  private country_list_url: string = '';
  private mock_countries_list;

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  public getCountryList(): Observable<any> {
    if (!AUTH.MOCK_COUNTRIES) {
      this.country_list_url = 'https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json';

      return this.http.get(this.country_list_url)
        .map((res: any) => res.json());
    }

    return this.mock_countries_list = Observable.create((Observable)=>{
      (countries) ? Observable.next(countries) : Observable.error("Something wrong in country list fetching");

      Observable.complete();
    });
  }

}

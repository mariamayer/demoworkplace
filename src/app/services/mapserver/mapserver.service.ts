import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams }    from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MapserverService {

  BASE_URL: string = 'https://work-place.herokuapp.com';

  constructor(private http: Http) { }

  get(page,perPage,value,criteria) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('sortBy', value);
    params.set('criteria', criteria);
    return this.http.get(`${this.BASE_URL}/api/addresses/${page}/${perPage}`,{ search: params })
      .map((res) => res.json());
  }

  search(string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('search', string);
    return this.http.get(`${this.BASE_URL}/api/search`,{ search: params })
      .map((res) => res.json());
  }

}

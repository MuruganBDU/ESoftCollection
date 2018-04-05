import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  url = 'http://localhost/CSS.Config.Api/api/Language/GetLocalizedLanguages';
  constructor(private http: HttpClient) { }
  GetCountries() {
    return this.http.get(this.url);
  }
}

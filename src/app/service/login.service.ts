// tslint:disable-next-line:eofline
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LoginService {
public url = 'http://localhost/ESoft/api/Account/CheckUser';
  constructor(private http: HttpClient) { }
  validateUser(credentials) {
    return this.http.post(this.url, credentials);
  }
}

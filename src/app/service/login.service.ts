// tslint:disable-next-line:eofline
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LoginService {
  public url = 'http://localhost/ESoft/api/Account/CheckUser';
  private isUserLoggedIn;
  private username;
  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
  }
  validateUser(credentials) {
    //return this.http.post(this.url, credentials);
    if (credentials.username == 'admin' && credentials.password == '123') {
      credentials.IsAutheticated = true;
      return credentials;
    }
    else {
      credentials.IsAutheticated = false;
      return credentials;
    }
  }
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
  removeUserLoggedIn() {
    debugger;
    this.isUserLoggedIn = false;
  }
}

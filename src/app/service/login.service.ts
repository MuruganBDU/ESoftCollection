// tslint:disable-next-line:eofline
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthService {
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
    localStorage.setItem("authenticated",this.isUserLoggedIn);
  }
  getUserLoggedIn() {
    if(localStorage.getItem("authenticated")){
      this.isUserLoggedIn=true;
    }
    return this.isUserLoggedIn;
  }
  removeUserLoggedIn() {
    this.isUserLoggedIn = false;
    localStorage.removeItem("authenticated");
    return false;
  }
}

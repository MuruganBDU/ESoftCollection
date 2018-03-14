import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  preserveWhitespaces: true
})
export class LoginComponent implements OnInit {
  lang: any[];
  options: FormGroup;
  hide = true;
  Registerhide = true;
  validUser: boolean;
  credentials: object = {
    userName: 'TestUser',
    Password: 'TestPassword'
  };
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(fb: FormBuilder, private http: HttpClient, apiservice: ApiService, private loginservice: LoginService) {
    this.options = fb.group({
      floatLabel: 'never',
      hideRequired: false
    });
  }
  ngOnInit() {
  }
  GetCountries() {
    this.http.get('http://localhost/CSS.Config.Api/api/Language/GetLocalizedLanguages')
      .subscribe(
        (data: any[]) => {
          this.lang = data;
          console.log(this.lang);
        }
      );
  }
  public validateUser(): void {
    this.loginservice.validateUser(this.credentials)
      .subscribe(
        result => {console.log(result); },
        error => console.log(error),
        () => console.log('complete')
      );
  }
}

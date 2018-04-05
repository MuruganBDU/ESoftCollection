import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/login.service';
import { RoutingModule } from '../routing/routing.module';
import { RouterModule, Router } from '@angular/router';

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
    userName: 'admin',
    Password: '123'
  };
  userName: string;
  password: string;
  isAuthenticate: boolean;

  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(fb: FormBuilder, private http: HttpClient, apiservice: ApiService, private authService: AuthService, private router: Router) {
    this.options = fb.group({
      floatLabel: 'never',
      hideRequired: false
    });
  }
  ngOnInit() {
    this.authService.removeUserLoggedIn();
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
    this.authService.validateUser(this.credentials).subscribe(result => {
      console.log(result);
      if (result == true) {
        this.isAuthenticate = true;
        this.router.navigate(['Dashboard']);
      }
    },
      error => console.log(error),
      () => console.log('complete')
    );
  }
  loginUser() {
    if (this.userName == 'admin' && this.password == '123') {
      this.authService.setUserLoggedIn();
      debugger;
      this.router.navigate(['Dashboard']);
    }
  }


}

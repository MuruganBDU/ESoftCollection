import { Component } from '@angular/core';
import { LoginService } from '././service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private loginservice: LoginService) {

  }
  public logout(): void {
    this.loginservice.removeUserLoggedIn();
    this.router.navigate(['/']);
  }
}


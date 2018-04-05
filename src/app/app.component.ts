import { Component } from '@angular/core';
import { AuthService } from '././service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthService) {

  }
  public logout(): void {
    this.authService.removeUserLoggedIn();
    this.router.navigate(['/']);
  }
}


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../service/login.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css'],
  providers: [AuthService]
})
export class TopnavComponent implements OnInit {

  isLoggedIn: boolean=false;

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authservice.getUserLoggedIn();
  }

  onLogout() {
    this.isLoggedIn = this.authservice.removeUserLoggedIn();
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../service/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css'],
  providers: [AuthService]
})
export class TopnavComponent implements OnInit {

  isLoggedIn: boolean=false;

  constructor(private authservice: AuthService,private router:Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authservice.getUserLoggedIn();
  }

  onLogout() {
    //this.isLoggedIn = this.authservice.removeUserLoggedIn();
    this.authservice.removeUserLoggedIn();
    this.router.navigate(['/login']);
  }

}

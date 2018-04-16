import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  options: FormGroup;
  top: string = "0px";
  constructor(fb: FormBuilder, private router: Router) {
    this.options = fb.group({
      'fixed': false,
      'top': 60,
      'bottom': 0,
    });
  }

  ngOnInit() {
  }
  public getTop() {
    alert("ale");
    if (this.router.url == '/login') {
      return this.top;
    } else {
      return this.top = "60px";
    }

  }
}

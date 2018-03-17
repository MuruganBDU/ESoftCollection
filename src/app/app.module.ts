import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing/routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiService } from './service/api.service';
import { LoginService } from './service/login.service';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TopnavComponent,
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [
    ApiService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

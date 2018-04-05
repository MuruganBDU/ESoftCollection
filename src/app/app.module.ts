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
import { AuthService } from './service/login.service';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TopnavComponent,
    SidenavComponent,
    FooterComponent,
    RegistrationComponent
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
    AuthService,AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

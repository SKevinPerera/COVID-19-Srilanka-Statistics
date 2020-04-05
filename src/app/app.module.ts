
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HospitalInfoComponent } from './components/hospital-info/hospital-info.component';
import { SrilankaMapDistributionComponent } from './components/srilanka-map-distribution/srilanka-map-distribution.component';
import { OtherCountryInfoComponent } from './components/other-country-info/other-country-info.component';
import { ComparisionComponent } from './components/comparision/comparision.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HospitalInfoComponent,
    SrilankaMapDistributionComponent,
    OtherCountryInfoComponent,
    ComparisionComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    appRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HospitalInfoComponent } from './components/hospital-info/hospital-info.component';
import { SrilankaMapDistributionComponent } from './components/srilanka-map-distribution/srilanka-map-distribution.component';
import { OtherCountryInfoComponent } from './components/other-country-info/other-country-info.component';
import { ComparisionComponent } from './components/comparision/comparision.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'hospitalinfo', component: HospitalInfoComponent},
    { path: 'srilankamapdistribution', component: SrilankaMapDistributionComponent},
    { path: 'othercountrydistribution', component: OtherCountryInfoComponent},
    { path: 'comparision', component: ComparisionComponent},
    { path: 'aboutus', component: AboutUsComponent},

    { path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
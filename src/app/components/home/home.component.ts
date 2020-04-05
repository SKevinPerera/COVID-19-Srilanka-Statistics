import { Component, OnInit } from '@angular/core';
import { CallingApiService } from './../../services/calling-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

/**Need Variables */
//Global INFO
global_new_cases: string;
global_total_cases: string;
global_deaths: string;
global_recovered: string;

//Local INFO
local_new_cases: string;
local_total_cases: string;
local_total_number_of_individuals_in_hospitals: string;
local_deaths: string;
local_recovered: string;
local_active_cases: string;
local_new_deaths: string;

update_date_time : string;



  constructor(
    private apiService: CallingApiService,
  ) { }

  ngOnInit(){

    this.apiService.getInfo()
    .subscribe
    (
      data=>
      {
        //Time Equalization
        this.update_date_time = data.data.update_date_time;
        
        //Local INFO
        this.local_new_cases = data.data.local_new_cases;
        this.local_total_cases = data.data.local_total_cases;
        this.local_total_number_of_individuals_in_hospitals = data.data.local_total_number_of_individuals_in_hospitals;
        this.local_deaths = data.data.local_deaths;
        this.local_recovered = data.data.local_recovered;
        this.local_active_cases = data.data.local_active_cases;
        this.local_new_deaths = data.data.local_new_deaths;

        //Global INFO
        this.global_new_cases = data.data.global_new_cases;
        this.global_total_cases = data.data.global_total_cases;
        this.global_deaths = data.data.global_deaths;
        this.global_recovered = data.data.global_recovered;
      }
    );
  }
}

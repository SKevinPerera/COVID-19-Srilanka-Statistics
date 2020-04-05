import { Component, OnInit } from '@angular/core';
import { CallingApiService } from './../../services/calling-api.service';
import { SrilankaHospitalInfo } from './../srilanka-hospital-info';

@Component({
  selector: 'app-hospital-info',
  templateUrl: './hospital-info.component.html',
  styleUrls: ['./hospital-info.component.scss']
})
export class HospitalInfoComponent implements OnInit {

  items = [];
  hospital = [];
  res = [];
  hospitalInfo : SrilankaHospitalInfo[] = [];

  constructor(
    private apiService: CallingApiService,
  ) { }

  ngOnInit() {
    this.apiService.getInfo()
    .subscribe
    (
      data=>
      {
        
        //Assigning items section 1
        for (let key in data){
          if (data.hasOwnProperty(key)){
            this.items.push(data[key]);
          }
        }
        //console.log(this.items);

        //Assigning main local and global result
        for(let key in this.items[2]){
            this.res.push(this.items[2][key]);
        }
        //console.log(this.res);

        //Assigning local hospital result
        this.hospital = this.res[13];
        console.log(this.hospital);

        console.log(this.hospital[0].hospital.id);
        console.log(this.hospital[0].hospital.name);
        console.log(this.hospital[0].hospital.name_si);
        console.log(this.hospital[0].hospital.name_ta);
        console.log(this.hospital[0].treatment_local);
        console.log(this.hospital[0].treatment_foreign);
        console.log(this.hospital[0].cumulative_local);
        console.log(this.hospital[0].cumulative_foreign);
        console.log(this.hospital[0].treatment_total);
        console.log(this.hospital[0].cumulative_total);


        for(let key in this.hospital)
        {
          let per_hospital = new SrilankaHospitalInfo(
            this.hospital[key].hospital.id,
            this.hospital[key].hospital.name, 
            this.hospital[key].hospital.name_si,
            this.hospital[key].hospital.name_ta,
             this.hospital[key].treatment_local,
            this.hospital[key].treatment_foreign,
            this.hospital[key].cumulative_local,
            this.hospital[key].cumulative_foreign,
            this.hospital[key].treatment_total,
            this.hospital[key].cumulative_total
          );
          this.hospitalInfo.push(per_hospital);
        }

        console.log(this.hospitalInfo);
      }
    );
  }

}

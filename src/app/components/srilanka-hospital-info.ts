export class SrilankaHospitalInfo {
     private id: number;
     private h_name_eng: string;
     private h_name_sin: string;
     private h_name_tam: string;
     private treatment_local: number;
     private treatment_foreign: number;
     private treated_foreign: number;
     private treated_local: number;
     private treatment_total: number;
     private treated_total: number;

     constructor(id, h_name_eng,h_name_sin,h_name_tam, treatment_local, 
        treatment_foreign, treated_local, treated_foreign, treatment_total, treated_total){
         this.id = id;
         this.h_name_eng = h_name_eng;
         this.h_name_sin = h_name_sin;
         this.h_name_tam = h_name_tam;
         this.treatment_local = treatment_local;
         this.treatment_foreign = treatment_foreign;
         this.treated_local = treated_local;
         this.treated_foreign = treated_foreign;
         this.treatment_total = treatment_total;
         this.treated_total = treated_total;
     }

  }
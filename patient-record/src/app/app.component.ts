import { Component, ViewChild } from '@angular/core';
import { PatientComponent } from './patient/patient/patient.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
;
  editMode = true;  data: Array<number> = [1, 2, 3, 4, 5, 6, 7];
  selectedDecimal = 1;
  name = 'Adam';
  surname = 'Rozmarynowski';
  pesel = '23028234792';


  edit() {
    this.editMode = true;
  }

  // save() {
  //   this.editMode = false;
  //   return this.name;
  // }



}

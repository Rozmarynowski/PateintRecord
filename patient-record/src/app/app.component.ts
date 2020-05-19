import { Component, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PatientComponent } from './patient/patient/patient.component';
import { Patient } from './patient/patient/patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isClicked = false;
  editMode = false;
  patient: Patient = new Patient('', '', '', '', '');
  saveFile = 'Pacjent';

  check(patient) {
    this.patient = patient;
    console.log(patient);
    console.log(patient.name);
    if (this.patient.name !== '' || this.patient.pesel !== ''
      || this.patient.surname !== '' || this.patient.comment !== ''
      || this.patient.clinic !== '') {
      this.isClicked = true;
    } else {
      this.isClicked = false;
    }
  }

  edit() {
    this.editMode = !this.editMode;
  }

  save(emit) {
    this.editMode = emit;
    this.isClicked = true;
  }



}

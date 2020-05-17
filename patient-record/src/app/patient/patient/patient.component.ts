import { Component, OnInit, Input } from '@angular/core';
import { Patient } from './patient';
import { CsvDataService } from './csvDataService';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientModel: Patient = new Patient('02020204256', 'Adam', 'Rozmarynowski');
  name;
  surname;
  pesel;
  editMode;
  objectArr: Patient[] = new Array();
  data: Array<number> = [1, 2, 3, 4, 5, 6, 7];
  selectedDecimal = 1;

  ngOnInit() {
    this.editMode = false;
  }

  save() {
    console.log('Zapisuję!');
    this.objectArr.push(this.patientModel);
    CsvDataService.exportToCsv('patients.csv', this.objectArr);
  }


  createPatient() {
    this.patientModel = new Patient(this.pesel, this.name, this.surname);
  }




}

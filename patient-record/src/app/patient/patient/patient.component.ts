import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CsvDataService } from './csvDataService';
import { Patient } from './patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  objectArr: Patient[] = new Array();
  data: Array<string> = [
    'Poradnia Podstawowej Opieki Zdrowotnej',
    'NZOZ-Poradnia',
    'Patron-Med',
    'Med-Kol',
    'Miejska Przychodnia Dąbrowa'];

  patientModel: Patient = new Patient('', '', '', '', '');


  @Input()
  editMode;

  @Output()
  eventEditMode = new EventEmitter();


  save() {
    console.log('Zapisuję!');
    this.objectArr.push(this.patientModel);
    CsvDataService.exportToCsv('patients.csv', this.objectArr);
    this.eventEditMode.emit(false);
  }

  // createPatient() {
  //   this.patientModel = new Patient(this.pesel, this.name, this.surname);
  // }




}

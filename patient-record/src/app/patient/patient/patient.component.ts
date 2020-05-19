import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { CsvDataService } from './csvDataService';
import { Patient } from './patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnChanges {

  objectArr: Patient[] = new Array();



  data: Array<string> = [
    '',
    'Poradnia Podstawowej Opieki Zdrowotnej',
    'NZOZ-Poradnia',
    'Patron-Med',
    'Med-Kol',
    'Miejska Przychodnia Dąbrowa'];

  patientModel: Patient = new Patient('', '', '', '', '');

  @Input()
  newPatient;

  @Input()
  editMode;

  @Output()
  eventEditMode = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    this.patientModel = this.newPatient;
  }

  save(name) {
    console.log('Zapisuję!');
    this.objectArr.push(this.patientModel);
    CsvDataService.exportToCsv(name + '.csv', this.objectArr);
    this.eventEditMode.emit(false);
  }

  addNew() {
    this.eventEditMode.emit(true);
    this.patientModel.pesel = '';
    this.patientModel.name = '';
    this.patientModel.surname = '';
    this.patientModel.clinic = '';
    this.patientModel.comment = '';
  }

  change(patient: Patient) {
    this.patientModel.pesel = patient.name;
  }


  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) ) {
      return false;
    }
    return true;
  }



}

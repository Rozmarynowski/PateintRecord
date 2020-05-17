import { Component } from '@angular/core';
import { PatientComponent } from './patient/patient/patient.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;

  edit() {
    this.editMode = !this.editMode;
  }

  save(emit) {
    this.editMode = emit;
  }



}

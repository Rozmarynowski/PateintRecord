import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Patient } from '../patient/patient';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-csv-reader',
  templateUrl: './csv-reader.component.html',
  styleUrls: ['./csv-reader.component.css']
})
export class CsvReaderComponent {
  selectedFile = null;
  patient: Patient;
  @Output()
  eventCSVEmiter = new EventEmitter();
  @Input()
  path: string;

  constructor(private http: HttpClient) {
  }

  file() {
    document.querySelector('input').click();
  }

  openFile(e) {
    this.selectedFile = e.target.files[0].name;
    console.log(this.selectedFile);
    console.log(e);
    if (this.selectedFile != null) {
      this.csv();
    }
  }

  csv() {
    this.http.get('/assets/patients/' + this.selectedFile, { responseType: 'text' })
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          csvToRowArray.splice(0, 1);
          var newtext = csvToRowArray.join('\n');
          let row = newtext.split(',');
          this.eventCSVEmiter.emit(new Patient(row[0], row[1], row[2], row[3], row[4]));
        },
        error => {
          console.log(error);
        }
      );


  }
}

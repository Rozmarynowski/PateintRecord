import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name = 'adam';
 data: Array<number> = [1, 2, 3, 4, 5, 6, 7];
 selectedDecimal = 1;
}

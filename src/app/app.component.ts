import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table-task';

  StudentsArr = [{
    name: "alaa",
    email: "alaashaher12@gmail.com",
    age: 27
  }];


}

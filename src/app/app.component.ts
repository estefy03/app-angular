import { Component } from '@angular/core';

type persona = {
  name:string;
  lastname:string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2023';
  valor : persona ={
    name: 'diego',
    lastname: 'cartagena',
    age: 9
  }
}

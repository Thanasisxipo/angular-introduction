import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Thanassis';

  person = {
    givenName: "Thanassis",
    surName: "Xypolytos",
    age: 35,
    email: "thanasis.xipo@gamil.com"
  };
}

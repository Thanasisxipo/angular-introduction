import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Thanassis';

  person0: Person  = {
      givenName: 'Thanassis',
      surName: 'Xypolytos',
      age: 35,
      email: 'thanasis.xipo@gamil.com',
      address: 'Athens, Greece'
    };

    person1: Person  = {
      givenName: 'John',
      surName: 'Snow',
      age: 36,
      email: 'john@gamil.com',
      address: 'New york, USA'
    };
}

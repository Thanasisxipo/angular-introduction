import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
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

import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExapmpleComponent } from './components/for-directive-exapmple/for-directive-exapmple.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';

export const routes: Routes = [
  { path: 'component-input-example', component: ComponentInputExampleComponent},
  { path: 'for-directive-example', component: ForDirectiveExapmpleComponent},
  { path: 'event-bind-example', component: EventBindExampleComponent},
  { path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
  { path: '', component: WellcomeComponent}
];

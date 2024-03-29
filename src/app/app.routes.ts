import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';

export const routes: Routes = [
  { path: 'event-bind-example', component: EventBindExampleComponent},
  { path: 'wellcome', component: WellcomeComponent},
  { path: '', redirectTo: '/wellcome', pathMatch: 'full'}
];

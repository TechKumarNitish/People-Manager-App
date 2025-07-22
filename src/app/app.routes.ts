import { Routes } from '@angular/router';
import{ PersonList } from './person-list/person-list';
import { PersonEdit } from './person-edit/person-edit';
import { PersonDelete } from './person-delete/person-delete';

export const routes: Routes =  [
  { path: '', component: PersonList },
  { path: 'edit/:id', component: PersonEdit },
  { path: 'delete/:id', component: PersonDelete },
];


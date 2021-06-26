import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from '../app/pages/persons/persons.component'
import { EditComponent } from './pages/persons/edit/edit.component';


const routes: Routes = [
  {
    path: "",
    component: PersonsComponent
  },
  {
    path: 'person/add/:id',
    component: EditComponent
  },
  {
    path: 'person/edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Persons } from 'src/app/models/persons.model';
import { PersonService } from 'src/app/serverices/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons: Persons[]

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.persons = this.personService.onGet();
  }

  onDelete(id: Number) {
    this.personService.onDelete(id)
  }

 

}

import { Injectable } from '@angular/core';
import { Persons } from '../../app/models/persons.model'

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons: Persons[] = [
    {
      "id": 1,
      "firstName": "Krystian",
      "lastName": "Nowak"
    },
    {
      "id": 2,
      "firstName": "Maciej",
      "lastName": "Kowalski"
    },
    {
      "id": 3,
      "firstName": "Zbigniew",
      "lastName": "Czajka"
    }
  ]

  constructor() { }
  onGet() {
    return this.persons;
  }

  onGetPerson(id: Number) {
    return this.persons.find(p => p.id === id)
  }

  onAdd(person: Persons) {
    this.persons.push(person);
  }

  onDelete(id: Number) {
    let person = this.persons.find(p => p.id === id)
    let index = this.persons.indexOf(person, 0)
    this.persons.splice(index, 1)
  }

  onUpdate(person: Persons) {
    let oldPerson = this.persons.find(p => p.id === person.id)
    oldPerson.firstName = person.firstName;
    oldPerson.lastName = person.lastName;
  }
}

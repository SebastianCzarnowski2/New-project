import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persons } from 'src/app/models/persons.model';
import { PersonService } from 'src/app/serverices/person.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  header: string;
  person: Persons = {
    id: 0,
    firstName: '',
    lastName: '',
  }

  constructor(private router: Router, private route: ActivatedRoute, private personsService: PersonService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.header = this.id === 0 ? 'Dodaj osobe' : 'Edytuj osobę';

    if (this.id != 0) {
      this.person = this.personsService.onGetPerson(this.id)
    }

  }

  onSubmit(form: NgForm) {
    let person: Persons = {
      id: form.value.id,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
    }

    if (this.id === 0) {
      this.personsService.onAdd(person)
    } else {
      this.personsService.onUpdate(person)
    }

    this.router.navigateByUrl('')

  }

}

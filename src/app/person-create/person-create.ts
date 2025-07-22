import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person } from '../models/person.model';
// import { PersonService } from '../person'; // Adjust the import path as necessary

@Component({
  selector: 'app-person-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './person-create.html',
  styleUrl: './person-create.css'
})
export class PersonCreate {
  @Input() visible: boolean = false;
  @Output() confirm = new EventEmitter<Person>();
  @Output() cancel = new EventEmitter<void>();

  // private constructor(private personService: PersonService) {}

  newPerson: Person = {
    name: '',
    age: 0,
    gender: 'Male',
    mobile: ''
  };

 handleCreate() {
  console.log("handleCreate", this.newPerson);
    this.confirm.emit(this.newPerson);
    this.newPerson = { name: '', age: 0, gender: 'Male', mobile: '' }; // reset form
  }

  handleCancel() {
    this.cancel.emit();
  }

  // createPerson(person: Person) {
  //   console.log("confirmCreate", person);

  //   this.personService.create(person).subscribe((newPerson) => {
  //     this.confirm.emit(this.newPerson);
  //   })
  // }
}

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this
import { RouterModule } from '@angular/router'; // For [routerLink]
import { PersonService } from '../person';
import { Person } from '../models/person.model';
import { PersonDelete } from '../person-delete/person-delete';
import { PersonEdit } from '../person-edit/person-edit';
import { PersonCreate } from '../person-create/person-create';

@Component({
  selector: 'app-person-list',
  imports: [CommonModule, RouterModule, PersonDelete, PersonEdit, PersonCreate],
  templateUrl: './person-list.html',
  styleUrl: './person-list.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonList {
  people: Person[] = [];
  loading = true;
  selectedPerson: Person = { name: '', age: 0, gender: '', mobile: '', _id: '' }
  showDeleteModal = false;
  showEditModal = false;
  showCreateModal = false;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getAll().subscribe(data => {
      console.log("response data", data)
      this.people = data;
      this.loading = false;
    });
  }

  openDeleteModal(person: Person) {
    this.selectedPerson = person;
    this.showDeleteModal = true;
  }

  confirmDelete(id: string | undefined | null) {
    if (!id) {
      this.showDeleteModal = false;
      return;
    }
    this.personService.delete(id).subscribe(() => {
      this.people = this.people.filter(p => p._id !== id);
      this.showDeleteModal = false;
    });
  }

  cancelDelete() {
    this.showDeleteModal = false;
  }

  openEditModal(person: Person) {
    this.selectedPerson = person;
    this.showEditModal = true;
  }

  confirmEdit(id: string | undefined) {
    if (!id) {
      this.showEditModal = false;
      return;
    }
    this.personService.update(id, this.selectedPerson!).subscribe(updatedPerson => {
      const index = this.people.findIndex(p => p._id === id);
      console.log("updatedPerson", updatedPerson)
      if (index !== -1) {
        this.people[index] = updatedPerson;
      }
      this.showEditModal = false;
    });
  }

  cancelEdit() {
    this.showEditModal = false;
  }

  openCreateModal() {
    this.showCreateModal = true;
  }

  confirmCreate(person: Person) {

    this.personService.create(person).subscribe((newPerson) => {
      this.people.push(newPerson);
      this.showCreateModal = false;
    })
  }

  cancelCreate() {
    this.showCreateModal = false;
  }
}

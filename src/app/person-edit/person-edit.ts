import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this
import { Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../models/person.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './person-edit.html',
  styleUrl: './person-edit.css'
})
export class PersonEdit {
  @Input() person: Person = { name: '', age: 0, gender: '', mobile: '', _id: '' };
  @Input() visible: boolean = false;
  @Output() confirm = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  ngOnChanges() {
    if (!this.person) {
      this.person = { name: '', age: 0, gender: '', mobile: '', _id: '' };
    }
  }

  handleConfirm() {
    if (this.person) this.confirm.emit(this.person._id);
  }

  handleCancel() {
    this.cancel.emit();
  }
}

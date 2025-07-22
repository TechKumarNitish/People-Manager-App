import { Component } from '@angular/core';
import { Person } from '../models/person.model';
import { CommonModule } from '@angular/common';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-delete.html',
  styleUrl: './person-delete.css'
})
export class PersonDelete {
  @Input() person: Person | null = null;
  @Input() visible: boolean = false;
  @Output() confirm = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  handleConfirm() {
    if (this.person) this.confirm.emit(this.person._id);
  }

  handleCancel() {
    this.cancel.emit();
  }
}

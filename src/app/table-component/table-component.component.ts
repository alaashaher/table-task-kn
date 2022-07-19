import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Student from '../student.model';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})
export class TableComponentComponent implements OnInit, OnChanges {
  @Input('StudentsArr') StudentsArr: Student[];
  @Output() deleteEmitter = new EventEmitter();
  @Output() editEmitter = new EventEmitter();
  @Output() toggleDeleteEmitter = new EventEmitter();

  studentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
  });

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    // debugger;
  }
  currentStudent: Student;
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(item: Student, index) {
    this.editEmitter.emit({ item: item, index: index });
  }
  deleteItem(id: any) {
    this.deleteEmitter.emit({ id: id });
  }

  deleteToggle(item: Student) {
    this.toggleDeleteEmitter.emit(item)
  }
}

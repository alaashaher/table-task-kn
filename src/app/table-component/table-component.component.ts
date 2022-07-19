import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  OnChanges,
  SimpleChanges,
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

  studentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
  });

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
  }
  currentStudent: Student;
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>, item: Student) {
    this.modalRef = this.modalService.show(template);
    console.log('item', item);
    this.studentForm.setValue({
      name: item.name,
      age: item.age,
      email: item.email,
    });
    this.currentStudent = item;
  }
  deleteItem(id: any) {
    this.StudentsArr = this.StudentsArr.filter((student) => student.id != id);
  }

  deleteToggle(item: Student) {
    this.StudentsArr = this.StudentsArr.map((p) =>
      p.id === item.id
        ? {
            ...p,
            isDeleted: !item.isDeleted,
          }
        : p
    );
  }
  onSubmit() {
    this.StudentsArr = this.StudentsArr.map((p) =>
      p.id === this.currentStudent.id
        ? {
            ...p,
            name: this.studentForm.value.name,
            age: this.studentForm.value.age,
            email: this.studentForm.value.email,
          }
        : p
    );

    this.modalService.hide(1);
  }
}

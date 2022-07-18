import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Student from './student.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'table-task';
  studentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
  });
  StudentsArr: Student[] = [
    { id: 'string', name: 'string', email: 'string', age: 'string' },
  ];

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.studentForm.value);
    this.StudentsArr.push(this.studentForm.value);
    this.modalService.hide(1);
  }
}

import {
  Component,
  TemplateRef,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import Student from './student.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'table-task';
  studentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
  });

  ngOnInit() {}

  inatialValue = {
    studentModal: {},
  };

  StudentsArr: Student[] = [
    {
      id: 'string',
      name: 'string',
      email: 'string',
      age: 'string',
      isDeleted: false,
    },
  ];

  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  openModal() {
    this.modalRef = this.modalService.show(ModalComponentComponent);
    this.modalRef.content.saveEvent.subscribe((data) => {
      console.log(data);
      this.StudentsArr.push({
        ...data,
        id: Math.floor(Math.random() * 100),
        isDeleted: false,
      });
      this.changeDetectorRef.detectChanges();
      this.modalRef.hide();
    });
  }

  onSubmit() {
    console.log('in');
    this.StudentsArr.push({
      ...this.studentForm.value,
      id: Math.floor(Math.random() * 100),
      isDeleted: false,
    });

    this.modalService.hide(1);
    console.log('this.StudentsArr', this.StudentsArr);
  }
}

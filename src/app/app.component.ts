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
      id: '1',
      name: 'alaa',
      email: 'alaa@gmail.com',
      age: '27',
      isDeleted: false,
    },
  ];

  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

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

  openModal(student?: any, index?: any) {
    debugger
    this.modalRef = this.modalService.show(ModalComponentComponent, {
      initialState: {
        studentModal: { student, id: student?.id },
      },
    });
    this.modalRef.content.saveEvent.subscribe((data: any) => {
      // console.log(data);
      if (index >= 0) {
        this.StudentsArr[index] = {
          ...data,
          id: student.id,
          isDeleted: student.isDeleted,
        };
      } else {
        // debugger;
        this.StudentsArr = [
          ...this.StudentsArr,
          {
            ...data,
            id: Math.floor(Math.random() * 100),
            isDeleted: false,
          },
        ];
      }
      this.modalRef.hide();
    });
  }

  deleteStudent(event: any) {
    this.StudentsArr = this.StudentsArr.filter(
      (student) => student.id != event.id
    );
  }

  deletedManyStudent() {
    this.StudentsArr = this.StudentsArr.filter(
      (student) => student.isDeleted != true
    );
  }
}

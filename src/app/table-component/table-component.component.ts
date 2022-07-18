import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Student from '../student.model';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})
export class TableComponentComponent implements OnInit {
  @Input('StudentsArr') StudentsArr: Student[];

  studentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
  });

  ngOnInit(): void {}

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>, item: Student) {
    this.modalRef = this.modalService.show(template);
    console.log('item', item);
  }
  deleteItem(id: any) {
    this.StudentsArr = this.StudentsArr.filter((item) => item.id != id);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css'],
})
export class ModalComponentComponent implements OnInit {
  studentModal: {
    name: string;
    age: number;
    email: string;
  };
  ngForm: NgForm;
  @Output('saveEvent') saveEvent = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}
  
  save() {
    // this.saveEvent.emit(this.studentModal);  ...this.studentForm.value
    this.saveEvent.emit({...this.studentForm.value});  

  }


  studentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
  });
}

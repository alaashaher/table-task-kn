import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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

  studentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
  });

  @Output('saveEvent') saveEvent = new EventEmitter();

  constructor(
    public bsModalRef: BsModalRef,
    private bsModalService: BsModalService
  ) {}

  ngOnInit(): void {
    debugger

    const initialState =
      this.bsModalService.config.initialState['studentModal'];
    if (initialState && initialState?.student) {
      // this.studentForm.patchValue(initialState?.student);
      this.studentModal = JSON.parse(JSON.stringify( initialState?.student)) //deep copy
    }
    debugger
  }

  save() {
    this.saveEvent.emit(this.studentModal); 
    // this.saveEvent.emit({ ...this.studentForm.value });
  }
}

import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.css'],
})
export class RentalFormComponent implements OnInit {

  //form that accepts data from initial rental form
  rentalForm = this.fb.group({
    pickUpLocation : ['', Validators.required],
    pickUpDate : ['', Validators.required],
    pickUpTime : ['', Validators.required],
    dropOffDate : ['' , Validators.required],
    dropOffTime : ['' , Validators.required]
  })

  constructor( private fb: FormBuilder) {}

  rentalFormButton(){
    console.log(this.rentalForm.value)
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { RentalInfoService } from 'src/app/services/rental-info.service'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html', 
  styleUrls: ['./rental-form.component.css'], 
})
export class RentalFormComponent implements OnInit {

  
 days!:number

  //form that accepts data from initial rental form
  rentalForm = this.fb.group({
    pickUpLocation : ['' , Validators.required],
    dropOffLocation : ['' , Validators.required],
    pickUpDate : ['' , Validators.required], 
    pickUpTime : ['' , Validators.required], 
    dropOffDate : ['' , Validators.required], 
    dropOffTime : ['' , Validators.required]
  })

  
  constructor( 
      private fb: FormBuilder , 
      private rentaInfo:RentalInfoService ,
      private router: Router,
      private location : Location
      ) {}

  rentalFormButton(){
    console.log(new Date().toISOString().split('T')[0]);
    this.validateDate();
    this.calculateDate();
    if(this.rentalForm.valid){
      const dataPassed = [
        this.rentalForm.value,
        {days : this.days}
      ];
      
      localStorage.setItem('rentalData', JSON.stringify(dataPassed ));
      this.router.navigateByUrl('/choose');
    }
  
  }

  

  //locations available
  locations:string[]=[
    'Kingston', 
    'St Andrew',
    'St Catherine',
    'St Mary',
    'Portland'
  ]

  ngOnInit(): void {
    let data = localStorage.getItem('rentalData');
    console.log(data)
  }

  validateDate() {
    const date = this.rentalForm.controls['pickUpDate'].value; //get pick up date value
    const now = new Date().toISOString().split('T')[0];   //get the current date
    if (date < now) {
        return false; //date is before today's date
    } else {
        return true; //date is today or some day forward
}}

calculateDate(){
  const pickUpDate = new Date(this.rentalForm.controls['pickUpDate'].value ).getTime();
  const dropOffDate = new Date(this.rentalForm.controls['dropOffDate'].value).getTime();
  const daysMillisecond = dropOffDate - pickUpDate ;
  const days = daysMillisecond/86400000;
  this.days = days
}

//return form control of forms
// get createControl(){
//   return this.rentalForm.controls;
// }

}

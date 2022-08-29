import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { RentalInfoService } from 'src/app/services/rental-info.service'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { timeMatch } from './timeMatch'; 

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html', 
  styleUrls: ['./rental-form.component.css'], 
})
export class RentalFormComponent implements OnInit {

  
 days!:number;
 submitted = false;
 min:any;
 nextTime:any;
 anotherTime:any;

  //form that accepts data from initial rental form
  rentalForm = this.fb.group({
    pickUpLocation : ['' , Validators.required],
    dropOffLocation : ['' , Validators.required],
    pickUpDate : ['' , Validators.required], 
    dropOffDate : ['' , Validators.required], 
    time : ['' , Validators.required],
  })

  
  constructor( 
      private fb: FormBuilder , 
      private rentaInfo:RentalInfoService ,
      private router: Router,
      private location : Location
      ) {}

  rentalFormButton(){
    this.submitted = true
    console.log(this.validateDate())
    this.validateDate();
    this.calculateDate();
    if(this.rentalForm.valid){
      const dataPassed = [
        this.rentalForm.value,
        {days : this.days}
      ];
      
      localStorage.setItem('rentalData', JSON.stringify(dataPassed));
      this.router.navigateByUrl('/choose');
    }

    else{
      alert('Fill out all fields')
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
    this.disableDate();
    let data = localStorage.getItem('rentalData');
    console.log(data);

  }


  validateDate() {
    const date = this.rentalForm.controls['pickUpDate'].value; //get pick up date value
    const now = new Date().toISOString().split('T')[0];   //get the current date
    if (date < now) {
        return false; //date is before today's date
    } else {
        return true; //date is today or some day forward
}}

//<----------- function to calculate the amount of days a car is rented ----------->
calculateDate(){
  const pickUpDate = new Date(this.rentalForm.controls['pickUpDate'].value ).getTime();
  const dropOffDate = new Date(this.rentalForm.controls['dropOffDate'].value).getTime();
  const daysMillisecond = dropOffDate - pickUpDate ;
  const days = daysMillisecond/86400000;
  this.days = days
}

//<----------- function that disallows date picking before current date ----------->
disableDate(){
  const tDay = new Date();
  
  var month:any = tDay.getMonth() + 1;
  var day:any = tDay.getDate();
  var year = tDay.getFullYear();

  if(month < 10)
    month = '0' + month.toString();
  
  if(day < 10)
    day = '0' + day.toString();

  var maxDate = year + '-' + month + '-' + day ;
  this.min = maxDate
}

//<-------------- function that runs on change for date input field -------------->
changeNext(){
  this.otherDate()
}

otherDate(){
 
}

//return form control of forms
get rentalControl(){
  return this.rentalForm.controls;
}

}

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
    localStorage.setItem('rentalData', JSON.stringify(this.rentalForm.value));
    this.router.navigateByUrl('/choose');
  }

  //locations available
  locations:string[]=[
    'Kingston',
    'St Andrew',
    'St Catherine',
    'St Mary',
    'Portland',
  ]

  ngOnInit(): void {
    let data = localStorage.getItem('rentalData');
    console.log(data);
  }

}

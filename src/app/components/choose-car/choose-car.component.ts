import { Component, OnInit } from '@angular/core';
import { RentalInfoService } from 'src/app/services/rental-info.service';
import { PickUpForm } from 'src/app/models/formPickUp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-car',
  templateUrl: './choose-car.component.html',
  styleUrls: ['./choose-car.component.css']
})
export class ChooseCarComponent implements OnInit {

  constructor(
    private rentalService : RentalInfoService 
    ) { }
  
  pickUpTime!:PickUpForm

  ngOnInit(): void {
    this.slideInFunction()
    let data = localStorage.getItem('rentalData');
    let obj =  JSON.parse(data!);
    this.pickUpTime = obj;

  }

  slideInFunction(){
    document.querySelector('.lef')
  }

  carTypes:string[]=[
    'Standard',
    'Luxury',
    'Off Road',
    'SUV',
  ]

  onClick(event:any){
    event.target.style. backgroundColor = 'rgba(2, 2, 120, 0.064)'
    event.target.style.color = 'rgb(2, 2, 120)';
    event.target.style.border = '1px solid rgb(2, 2, 120)';
  }
}

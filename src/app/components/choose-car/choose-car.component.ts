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
}

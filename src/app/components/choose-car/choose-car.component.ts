import { Component, OnInit } from '@angular/core';
import { RentalInfoService } from 'src/app/services/rental-info.service';
import { PickUpForm } from 'src/app/models/formPickUp';
import { Router } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Cars } from 'src/app/models/car';

@Component({
  selector: 'app-choose-car',
  templateUrl: './choose-car.component.html',
  styleUrls: ['./choose-car.component.css']
})
export class ChooseCarComponent implements OnInit {

  constructor(
    private router : Router,
    private carService : CarServiceService
    ) { }
  
  pickUpTime!:PickUpForm

  cars:Cars[] = []


  ngOnInit(): void {
    console.log(this.router.url);
    let data = localStorage.getItem('rentalData');
    let obj =  JSON.parse(data!);
    this.pickUpTime = obj;
    this.carService.getCars().subscribe((result)=>{
        this.cars = result
    })
  }

  carTypes:string[]=[
    'Standard',
    'Luxury',
    'Off Road',
    'SUV',
  ]

  chooseType(event:any){
    if(event.target.classList.contains('selected')){
      event.target.classList.remove('selected');
      event.target.style.border = '1px solid rgba(187, 186, 186, 0.486)';
    }
    
    else{
      event.target.classList.add('selected');
      event.target.style.border = '1px solid rgb(2, 2, 120)'
      let type = event.target.innerText.toLowerCase();;
      // this.carService.getCarByType(type).subscribe((result)=>{
      //   this.cars.push(result)
      // })
      this.cars = this.cars.filter((e)=>{
        return e.car_Type === type
      })
      console.log(this.cars)
    }
    
  }

  
    
   
}

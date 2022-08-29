import { Component, OnInit } from '@angular/core';
import { RentalInfoService } from 'src/app/services/rental-info.service';
import { PickUpForm } from 'src/app/models/formPickUp';
import { Router } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Cars } from 'src/app/models/car';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-choose-car',
  templateUrl: './choose-car.component.html',
  styleUrls: ['./choose-car.component.css']
})
export class ChooseCarComponent implements OnInit {

  constructor(
    private router : Router,
    private carService : CarServiceService,
    public nav : NavBarService
    ) { }
  
  pickUpTime!:PickUpForm;
  cars:Cars[] = [];
  days!:any;
  clickedEdit:boolean = false

  ngOnInit(): void {
    this.nav.show()
    this.nav.changeColorFunc()
    // console.log(this.router.url);
    let data = localStorage.getItem('rentalData');
    let obj =  JSON.parse(data!);
    this.pickUpTime = obj[0];
    this.days = obj[1]
    this.carService.getCars().subscribe((result)=>{
        this.cars = result
    })
    console.log(this.days)
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

  editButton(){
    this.clickedEdit = true
  }
    
  viewDeal(car:any, days:any){
    console.log(car,days)
  }
}

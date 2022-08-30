import { Component, OnInit } from '@angular/core';
import { RentalInfoService } from 'src/app/services/rental-info.service';
import { rentalForm } from 'src/app/models/rentalForm';
import { Router } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Cars } from 'src/app/models/car';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { FormBuilder , Validators} from '@angular/forms';
import { days } from 'src/app/models/days';

@Component({
  selector: 'app-choose-car',
  templateUrl: './choose-car.component.html',
  styleUrls: ['./choose-car.component.css']
})
export class ChooseCarComponent implements OnInit {

  constructor(
    private router : Router,
    private carService : CarServiceService,
    public nav : NavBarService,
    private fb : FormBuilder
    ) { }
  
  pickUpTime!:rentalForm;
  cars:Cars[] = [];
  days!:days;
  clickedEdit:boolean = false;

  pageSlice:Cars[]=[]; 

   //<-------- paginator event -------->
   pageSize(event:any){
    console.log(event)
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.cars.length){
        endIndex = this.cars.length
      }
      this.pageSlice = this.cars.slice(startIndex, endIndex);
  };

  ngOnInit(): void {
    this.nav.show()
    this.nav.changeColorFunc()
    //<---------------- retrieveing data from local storage ----------------->
    let data = localStorage.getItem('rentalData');
    let obj =  JSON.parse(data!);
    this.pickUpTime = obj[0];
    this.days = obj[1]
    this.carService.getCars().subscribe((result)=>{
        this.cars = result;
        this.pageSlice = this.cars.slice(0 , 6);
        console.log(this.cars[0].specs[0].passengers)
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

  editButton(){
    this.clickedEdit = true
  }
    
  viewDeal(car:any, days:any){
    localStorage.setItem('car', JSON.stringify(car));
    this.router.navigateByUrl('/order');
  }


}

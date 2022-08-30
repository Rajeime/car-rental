import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { Cars } from 'src/app/models/car';
import { days } from 'src/app/models/days';
import { rentalForm } from 'src/app/models/rentalForm';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  constructor( 
    public nav : NavBarService,
    private carService : CarServiceService
    ) { }

  car!:Cars;
  rentalData!:rentalForm;
  days!:days;

  ngOnInit(): void {
    this.nav.show()
    this.nav.changeColorFunc()
    let data = localStorage.getItem('car');
    let obj =  JSON.parse(data!);
    this.car = obj;
    let rental = localStorage.getItem('rentalData')
    let rentals =  JSON.parse(rental!);
    this.rentalData = rentals[0];
    this.days = rentals[1];
    console.log(this.days);
  }

  bookNow(id:any , car:any){
    this.car.available -=1 
    this.carService.updateItem(id,car).subscribe(()=>{

    })
  }

}

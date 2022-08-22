import { Component, OnInit, Input } from '@angular/core';
import { Cars } from 'src/app/models/car';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-slide-show',
  template:`
  <div class="outer-container">
    <div class="slide-container" *ngFor="let car of cars" >
      <img src="{{car.car_Img}}" alt="" style="width: 100%;">
      <span class="prev click"><i class="fa fa-angle-left"></i></span>
      <span class="next click"><i class="fa fa-angle-right"></i></span>
        <div class="headLine" >
          <p class="carMake">{{car.car_Make}}</p>
          <p class="carModel">{{car.car_Model}}</p>
          <button class="bookNow">Book Now</button>
        </div>
      </div>
  </div>
  ` ,
  styles: [
    `
    /* .outer-container{
      display:flex;
      justify-content:space-around;
    } */

     .slide-container{
      position:relative;
      width:100%;
    }

    .click{
      color:white;
      position: absolute;
      top: 50%;
      cursor:pointer;
      background:var(--accent);
      padding:10px;
      font-weight: bold;
      width:20px;
      display:flex;
      justify-content:center;
    }

    .prev{
      left:20px
    }

    .next{
      right:20px
    }

    .headLine{
      position:absolute;
      left:10%;
      top: 20%;
      color:white;
    }

    .headLine p{
      text-transform:uppercase;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      line-height: 1px;
    }

    .headLine .carMake{
      font-weight: 500;
      font-size: 74px;
    }

    .headLine .carModel{
      font-size: 40px;
    }

    .headLine .bookNow{
      background-Color: var(--accent);
      padding: .4rem .6rem;
      color: white;
      text-transform : uppercase;
      font-size : 12px;
      border: 1px solid var(--accent);
      cursor:pointer;
    }
    `
  ]
})

export class SlideShowComponent implements OnInit {

  @Input() slideInterval = 5000; //6 seconds

  constructor( private carService : CarServiceService) { }

cars:Cars[] = []

  ngOnInit(): void {
    this.carService.getCars().subscribe((result)=>{
      this.cars = result
    })
  }

}

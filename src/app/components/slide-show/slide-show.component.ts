import { Component, OnInit, Input , OnDestroy  } from '@angular/core';
import { Cars } from 'src/app/models/car';
import { CarServiceService } from 'src/app/services/car-service.service';


@Component({
  selector: 'app-slide-show',
  template:`
    <div class="slide-container" *ngFor="let car of cars ; let i = index" >
      
    <!-- div for each item and info -->
    <div [ngClass]="{'active':  selectedIndex === i}" class="itemsContainer fade">
    <img src="{{car.car_Img}}" alt="" style="width: 100%;">
        <div class="headLine" >
          <p class="carMake">{{car.car_Make}}</p>
          <p class="carModel">{{car.car_Model}}</p>
          <button class="bookNow" (click)="bookNow(car)">Book Now</button>
        </div>
    </div>
    
      </div>
        <!-- manipulation buttons for slide show -->
        <span class="prev click" (click)="prevBut()"><i class="fa fa-angle-left"></i></span>
      <span class="next click" (click)="nextBut()"><i class="fa fa-angle-right"></i></span>
  ` ,
  styles: [
    `
    .itemsContainer{
      display:none
    }

    .active{
      display:block;
    }

    .slide-container{
      position:relative;
    }

    .click{
      color:white;
      position:absolute;
      top:45%;
      cursor:pointer;
      background:var(--accent);
      padding:10px;
      font-weight:bold;
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
      top:20%;
      color:white;
    }

    .headLine p{
      text-transform:uppercase;
      font-family:'Roboto', sans-serif;
      font-style:normal;
      line-height:1px;
    }

    .headLine .carMake{
      /* font-weight: 500; */
      font-size: 74px;
      font-weight : 300
    }

    .headLine .carModel{
      font-size: 40px;
      font-weight : 300
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

    .fade{
      animation-name: fade;
      animation-duration : 1.5s;
    }

    @keyframes fade{
      from {
        opacity: 0.9;
      }

      to{
        opacity : 1
      }
    }
    `
  ]
})

export class SlideShowComponent implements OnInit , OnDestroy{


//variables used to manipulate slideshow
  @Input() slideInterval = 5000; //5 seconds
  @Input() autoSlide = false;
  @Input() selectedIndex = 0 ;

  constructor( private carService : CarServiceService) { }
  ngOnDestroy(): void {
   this.autoSlide = false
  }

  //array for storing cars from database
  cars:Cars[] = []

  //prev button for slideshow
  prevBut():void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.cars.length - 1
    }
    else{
      this.selectedIndex --
    }
    console.log(this.selectedIndex)
  }

   //next button for slideshow
  nextBut():void{
    if(this.selectedIndex === this.cars.length - 1){
      this.selectedIndex = 0
    }

    else{
      this.selectedIndex ++
    }

    console.log(this.selectedIndex)
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((result)=>{
      this.cars = result.sort((a,b)=>{
        return b.times_rented - a.times_rented
      }).slice(0,4)
      console.log(this.cars)
    })

    if(this.autoSlide){
      this.autoSlider()
    }
  }

  autoSlider(): void{
    setInterval(()=>{
      this.nextBut();
    }, this.slideInterval)
  }

  bookNow(car:Cars):void{
    console.log(car)
  }
}

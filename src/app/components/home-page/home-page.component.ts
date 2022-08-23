import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Cars } from 'src/app/models/car';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
    `
    .cars{
      display:grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      justify-items: center;
      grid-row-gap: 60px;
      /* place-items: center; */
    }

    .car-item{
      cursor:pointer
    }

    .carListHeading{
      text-align: center; 
      font-family: 'Poppins', sans-serif; 
      font-weight: 300 ; 
      line-height: 10px;
    }
    .seeMore{
      color :rgb(2, 2, 120); 
      font-size: 30px; 
      margin-top: 10px; 
      cursor: pointer;
    }
    `
  ]
})
export class HomePageComponent implements OnInit {

  constructor( private carService : CarServiceService) { }

  cars:Cars[] = [];

  spliceContent:number = 3
  
  ngOnInit(): void {
    this.carService.getCars().subscribe((result)=>{
      this.cars = result
    })
  }

// <--------------- see more button function  --------------->
  seeMore():void{
    this.spliceContent += 3
  }

  // <--------------- see less button function  --------------->
  seeLess():void{
    this.spliceContent -= 3
  }

}

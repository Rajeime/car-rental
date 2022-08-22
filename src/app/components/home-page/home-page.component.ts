import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Cars } from 'src/app/models/car';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
    `
    .cars{
      display:flex;
      justify-content: space-evenly
    }
    `
  ]
})
export class HomePageComponent implements OnInit {

  constructor( private carService : CarServiceService) { }

  cars:Cars[] = []

  ngOnInit(): void {
    this.carService.getCars().subscribe((result)=>{
      this.cars = result
    })
  }

}

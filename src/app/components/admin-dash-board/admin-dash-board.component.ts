import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/models/car';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {

  cars:Cars[]=[]

  constructor(private carService : CarServiceService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((result)=>{
      this.cars = result
    })
  }

}

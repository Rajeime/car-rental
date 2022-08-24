import { Component, OnInit } from '@angular/core';
import { RentalInfoService } from 'src/app/services/rental-info.service';

@Component({
  selector: 'app-choose-car',
  templateUrl: './choose-car.component.html',
  styles: [

    `.infoPassed{
      border: 2px solid #ffb700; 
      border-radius:4px; 
      margin:40px 6%;
      display: flex; 
      justify-content:space-between; 
      padding: 14px; 
      align-items: center;}

    .leftInfo{
      display: flex; 
      justify-content:space-around; 
      line-height: 3px; 
      align-items: center;
      }

    .pickUp{
      font-size: 16px;
      font-weight: 700;
      font-family: sans-serif
    }

    .timeInfo{
      font-size: 14px;
      font-weight: 400;
      font-family: sans-serif;
    }

    .editButton{
      background-color :rgb(2, 2, 120); 
      padding: calc(4px*2) calc(4px*4);
      color: white; 
      border: none; 
      border-radius: 2px;
    }
    `
  ]
})
export class ChooseCarComponent implements OnInit {

  constructor(private rentalService : RentalInfoService) { }

  ngOnInit(): void {
    console.log(this.rentalService.getInfo())
  }

}

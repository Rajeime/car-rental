import { Component, OnInit , Input} from '@angular/core';
import { Cars } from 'src/app/models/car';

@Component({
  selector: 'app-cars',
  template: `
    <div class="container">

      <div class="image">
          <img src="/assets/background.png" alt="">
      </div>
      <p class="carType grey">{{car.car_Type | uppercase}}</p>
      <h1 class="carName">{{car.car_Make}} {{car.car_Model}}</h1>
      
      <div class="price">
          <p class="grey">price</p>
          <p>{{car.price | currency}}</p>
      </div>

    </div>
  `,
  styles: [`
    .container{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        max-width: 300px;
        border-radius: 4px;
        margin: 10px;
        font-family: 'Poppins', sans-serif;
        transition: transform  .6s;
    }
  
    .container:hover{  
        transform: scale(1.1); 
    }
  
    .container img{
        width: 100%;
        border-radius:4px 4px 0px 0px;
        height: 140px;
    }
  
    .carType, .carName{
        text-align: center;
    }
  
    .price{
        display: flex;
        justify-content: space-between;
        margin: 0 10px;
        border-top: 2px solid var(--accent);
        text-transform: uppercase;
    }
  
    .grey{
        color: rgb(83, 83, 83);
    }
  `
  ]
})

export class CarsComponent implements OnInit {

  constructor() { }

  @Input() car!: Cars 

  ngOnInit(): void {
  }

}

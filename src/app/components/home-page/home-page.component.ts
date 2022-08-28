import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Cars } from 'src/app/models/car';
import { FormBuilder , Validators} from '@angular/forms';

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

    .paginator-container{
    margin: 40px
  }
    `
  ]
})
export class HomePageComponent implements OnInit {

    //<---------------- form that accepts data from initial rental form ---------------->
    postCar = this.fb.group({
        pickUpLocation : ['', Validators.required],
        pickUpDate : ['', Validators.required],
        pickUpTime : ['', Validators.required],
        dropOffDate : ['' , Validators.required],
        dropOffTime : ['' , Validators.required]
    })

    constructor( private carService : CarServiceService , private fb: FormBuilder) { }
  
    //array to save all cars coming from database
    cars:Cars[] = [];

        //paginator variables
    pageOptions = [6, 12, 18, 100];


    pageNumber!:number 

    pageSize(event:any){
        const pageNumber = event.pageSize
        this.pageNumber = pageNumber
    };
  
    ngOnInit(): void {
        this.carService.getCars().subscribe((result)=>{
            this.cars = result.splice(0,6)
        })
 
    };

    postCarButton():void{  
     // const { car_Type , car_Model ,  car_Img , car_Make ,  car_Year , price ,  times_rented , quantity  } = this.postCar.value
        this.carService.createItem(this.postCar.value).subscribe(()=>{
        alert('car added');
    })

  }

 
}

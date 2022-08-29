import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Cars } from 'src/app/models/car';
import { FormBuilder , Validators} from '@angular/forms';
import { NavBarService } from 'src/app/services/nav-bar.service';

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

    .heading{
      text-align: center; 
      font-family: 'Poppins', sans-serif; 
      font-weight: 300 ; 
    }
    .carListHeading{
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

  .services{
    color:white;
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

    constructor( 
      private carService : CarServiceService , 
      private fb: FormBuilder,
      public nav : NavBarService
      ) { }
  
    //array to save all cars coming from database
    cars:Cars[] = [];

    pageSlice:Cars[]=[]

    pageNumber!:number 

    pageSize(event:any){
      console.log(event)
        const startIndex = event.pageIndex * event.pageSize;
        let endIndex = startIndex + event.pageSize;
        if(endIndex > this.cars.length){
          endIndex = this.cars.length
        }
        this.pageSlice = this.cars.slice(startIndex, endIndex)
    };
  
    ngOnInit(): void {
        this.nav.show()
        this.nav.changeColorBack()
        this.carService.getCars().subscribe((result)=>{
            this.cars = result
            this.pageSlice = this.cars.slice(0 , 6)
        })
 
    };

    postCarButton():void{  
     // const { car_Type , car_Model ,  car_Img , car_Make ,  car_Year , price ,  times_rented , quantity  } = this.postCar.value
        this.carService.createItem(this.postCar.value).subscribe(()=>{
        alert('car added');
    })

  }

 
}

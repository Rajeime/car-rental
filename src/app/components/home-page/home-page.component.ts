import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Cars } from 'src/app/models/car';
import { FormBuilder , Validators} from '@angular/forms';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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

    loginForm = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })

    loginFormFunc(){
      console.log(this.loginForm.value)
      if(this.loginForm.valid){
        this.auth.login(this.loginForm.value).subscribe(()=>{
          this.route.navigateByUrl('/admin')
        })  
      }
    }

    constructor( 
      private carService : CarServiceService , 
      private fb: FormBuilder,
      public nav : NavBarService,
      private auth : AuthService,
      private route : Router
      ) { }
  
    //array to save all cars coming from database
    cars:Cars[] = [];

    //<-------- array for showing a partial amount of cars for paginator -------->
    pageSlice:Cars[]=[];

    //<-------- paginator event -------->
    pageSize(event:any){
      console.log(event)
        const startIndex = event.pageIndex * event.pageSize;
        let endIndex = startIndex + event.pageSize;
        if(endIndex > this.cars.length){
          endIndex = this.cars.length
        }
        this.pageSlice = this.cars.slice(startIndex, endIndex);
    };
  
    ngOnInit(): void {
       //<-------- allows navbar to be visible on homepage -------->
        this.nav.show();
        //<-------- assigns initial color to navabar -------->
        this.nav.changeColorBack();
        this.carService.getCars().subscribe((result)=>{
            this.cars = result
            this.pageSlice = this.cars.slice(0 , 6)
        });
    };

}

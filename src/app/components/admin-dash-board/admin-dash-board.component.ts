import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cars } from 'src/app/models/car';
import { CarServiceService } from 'src/app/services/car-service.service';
import swal from 'sweetalert2'; 
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {

  cars:Cars[]=[];
  @ViewChild('modal')modal!:ElementRef
  

  getCars(){
    this.carService.getCars().subscribe((result)=>{
      this.cars = result;
    })
  }

  

  constructor(
    private carService : CarServiceService,
    private fb : FormBuilder
    
    ) { }

  ngOnInit(): void {
    this.getCars()
  }

  deleteCar(id:any){
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        this.carService.deleteCar(id).subscribe(()=>{
          this.getCars()
        })
      }
    })
  }

  //<------------ method that updates car in database ------------> 
  updateCar(id:any){

  }

    //<------------ brings up pop-up for data add form ------------> 
  add(){
    console.log(this.modal)
    this.modal.nativeElement.style.display = 'block';
  }

  added(data:any){
    this.carService.createItem(data).subscribe(()=>{
      this.getCars();
      this.modal.nativeElement.style.display = 'none';
      swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Car Added',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
}

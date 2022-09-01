import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cars } from 'src/app/models/car';
import { CarServiceService } from 'src/app/services/car-service.service';
import swal from 'sweetalert2'; 
import { FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit{

  dataz:Cars[]=[]

  cars:Cars[]=[];
  @ViewChild('modal')modal!:ElementRef;
  

  getCars(){
    this.carService.getCars().subscribe((result)=>{
      this.cars = result;
    })
  }

  constructor(
    private carService : CarServiceService,
    private fb : FormBuilder,
    public modals : ModalService,
    public footer : NavBarService
    
    ) { }

  ngOnInit(): void {
    this.getCars()
    this.footer.visibleFooterFunHide()
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
  updateCar(id:any, car:any){
    this.modals.showAddForm();
    this.dataz = car
  }

  //<------------ brings up pop-up for data add form ------------> 
  add(){
    //popup modal
    this.modals.showAddForm()
  }

  added(data:any){
    // this.carService.createItem(data).subscribe(()=>{
    //   this.getCars();
    //   this.modal.nativeElement.style.display = 'none';
    //   swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Car Added',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    // })
  }
}

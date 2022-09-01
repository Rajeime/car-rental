import { Component, OnInit , Output , EventEmitter , Input } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
import { rentalForm } from 'src/app/models/rentalForm';
import { Cars } from 'src/app/models/car'; 
import { CarServiceService } from 'src/app/services/car-service.service';
import { ModalService } from 'src/app/services/modal.service';
import swal from 'sweetalert2';
import { specs } from 'src/app/models/specs';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private fb : FormBuilder,
              private carService : CarServiceService,
              public modal : ModalService
              ) { } 

  // @Output() dataEmitter  = new EventEmitter<rentalForm>();
  @Input() data:any;

  ngOnInit(): void {
    this.AddCarForm.setValue({
        car_Type : this.data.car_Type,
        car_Model : this.data.car_Model,
        car_Img :this.data.car_Img,
        car_Make : this.data.car_Make,
        car_Year : this.data.car_Year,
        price : this.data.price,
        times_rented :this.data.times_rented,
        available : this.data.available,
        specs : { passengers : this.data.specs[0].passengers,
                  baggage : this.data.specs[1].baggage,
                  doors : this.data.specs[2].doors}
    })
    console.log(this.AddCarForm.value)
    console.log(this.data)
  }

  AddCarForm = this.fb.group({
    car_Type : ['', Validators.required],
    car_Model : ['', Validators.required],
    car_Img :['', Validators.required],
    car_Make : ['', Validators.required],
    car_Year : ['', Validators.required],
    price : ['', Validators.required],
    times_rented : ['', Validators.required],
    available : ['', Validators.required],
    
    specs : this.fb.group({
      passengers : ['', Validators.required],
      baggage :  ['', Validators.required],
      doors :  ['', Validators.required]
    })
  })

  //<------------ method that adds car to database ------------> 
  AddCars(){
      // this.AddCarForm.getRawValue
    this.carService.createItem(this.AddCarForm.value).subscribe(()=>{
      swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Car Added',
            showConfirmButton: false,
            timer: 1500
          })
      this.modal.hideAddForm();
    })
    
  }
  closeModal(){
    this.modal.hideAddForm()
  }
}

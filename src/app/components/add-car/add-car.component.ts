import { Component, OnInit , Output , EventEmitter , Input} from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
import { rentalForm } from 'src/app/models/rentalForm';
import { Cars } from 'src/app/models/car'; 

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  @Output() dataEmitter  = new EventEmitter<rentalForm>();
  @Input() data:Cars[] = [];

  ngOnInit(): void {
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
    this.dataEmitter.emit(this.AddCarForm.value)
  }
}

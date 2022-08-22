import { Component, OnInit , Input} from '@angular/core';
import { Cars } from 'src/app/models/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }

  @Input() car!: Cars 

  ngOnInit(): void {
  }

}

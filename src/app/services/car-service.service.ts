import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cars } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + '/cars/';
 
  //<--------------- service for retrieving all cars --------------- >
  getCars():Observable<Cars[]>{
    return this.http.get<Cars[]>(this.apiUrl);
  }

  //<--------------- service for posting car --------------- >
  createItem(car:Cars) {
    return this.http.post<Cars>(this.apiUrl, car);
  }

   //<--------------- service for specific car --------------- >
   getCar(id:string) {
    return this.http.get<Cars>(this.apiUrl + id);
  }

  //<--------------- service for updating car --------------- >
  updateItem(carID: string, car: Cars) {
    return this.http.put<Cars>(this.apiUrl + carID, car);
  }

  //<--------------- service for deleting car --------------- >
  deleteCar(carID: string) {
    return this.http.delete<Cars>(this.apiUrl + carID);
  }

  //<--------------- service getting car by type --------------- >
  getCarByType(type:string){
    return this.http.get<Cars>(this.apiUrl + '?carType=' + type)
  }
}


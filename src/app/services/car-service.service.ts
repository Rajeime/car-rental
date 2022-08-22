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
 
  getCars():Observable<Cars[]>{
    return this.http.get<Cars[]>(this.apiUrl);
  }

  // createItem(category:Category) {

  //   return this.http.post<ApiResponse>(this.apiUrl, category);
  // }

  // updateItem(categoryID: string, category: Category) {
  //   return this.http.put<ApiResponse>(this.apiUrl + categoryID, category);
  // }

  // deleteItem(cateforyID: string) {
  //   return this.http.delete<ApiResponse>(this.apiUrl + cateforyID);
  // }
}


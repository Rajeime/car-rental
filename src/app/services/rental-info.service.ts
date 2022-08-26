import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalInfoService {

  constructor() { }

  public saveData(value:string){
    localStorage.setItem('key', value) 
  }

  public getData(key:string){
    return localStorage.getItem('key')
  }

}

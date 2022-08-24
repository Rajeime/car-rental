import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalInfoService {

  constructor() { }

  resntalInfo:[] = []

  getInfo(){
    return this.resntalInfo 
  }
}

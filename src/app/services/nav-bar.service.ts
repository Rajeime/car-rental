import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  visible!: boolean;
  changeColor!:boolean;

  constructor() { this.visible = false , this.changeColor }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  changeColorFunc(){
    this.changeColor = true
  }

  changeColorBack(){
    this.changeColor = false
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  visible!: boolean;
  changeColor!:boolean;
  visibleFooter!:boolean

  constructor() { this.visible = false , this.changeColor , this.visibleFooter = true }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  changeColorFunc(){
    this.changeColor = true
  }

  changeColorBack(){
    this.changeColor = false
  }

  visibleFooterFunHide(){
    this.visibleFooter = false
  }

  
  visibleFooterFun(){
    this.visibleFooter = true
  }

}

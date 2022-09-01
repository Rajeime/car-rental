import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  visible! : boolean

  constructor() { this.visible = false}

  hideAddForm(){
    this.visible = false
  }

  showAddForm(){
    this.visible = true
  }
}

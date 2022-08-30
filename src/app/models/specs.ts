export class specs {
    passengers : number;
    baggage : number;
    doors : number;
    
    constructor(
    passengers? : number,
    baggage? : number,
    doors? : number,
    
    ) {
    this.passengers = passengers!;
    this.baggage = baggage!;
    this.doors = doors!
  }
}
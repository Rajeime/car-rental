export class Cars {
    _id?: string;
    car_Type : string;
    car_Model : string;
    car_Img : string;
    car_Make : string;
    car_Year : number;
    price : number;
    times_rented : number;
    quantity : number;
  
    constructor(
      _id? : string,
      car_Type? : string,
      car_Model? : string,
      car_Img ? : string,
      car_Make? : string,
      car_Year? : number,
      price? : number,
      times_rented? : number,
      quantity? : number,
    ) {
      this._id = _id!;
      this.car_Type = car_Type!;
      this.car_Model = car_Model!;
      this.car_Img = car_Img!
      this.car_Make = car_Make!;
      this.car_Year = car_Year!;
      this.price = price!;
      this.times_rented = times_rented!;
      this.quantity = quantity!;
    }
  }
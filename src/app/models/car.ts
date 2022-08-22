export class Cars {
    _id?: string;
    car_Model: string;
    car_Img : String;
    car_Make: string;
    car_Year: Number;
    price: Number;
    times_rented: number;
    quantity: number;
  
    constructor(
      _id?: string,
      car_Model?: string,
      car_Img ?: String,
      car_Make?: string,
      car_Year?: Number,
      price?: Number,
      times_rented?: number,
      quantity?: number,
    ) {
      this._id = _id!;
      this.car_Model = car_Model!;
      this.car_Img = car_Img!
      this.car_Make = car_Make!;
      this.car_Year = car_Year!;
      this.price = price!;
      this.times_rented = times_rented!;
      this.quantity = quantity!;
    }
  }
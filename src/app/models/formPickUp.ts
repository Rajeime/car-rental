export class PickUpForm {
    pickUpLocation : string;
    dropOffLocation: string;
    pickUpDate : string;
    dropOffDate : string;
    time : string;

    constructor(
    pickUpLocation? : string,
    dropOffLocation?: string,
    pickUpDate? : string,
    dropOffDate? : string,
    time?: string
    ) 

    {
    this.pickUpLocation = pickUpLocation!;
    this. dropOffLocation = dropOffLocation!;
    this.pickUpDate = pickUpDate!;
    this.dropOffDate = dropOffDate!;
    this.time = time!
    }
  }
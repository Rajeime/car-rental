export class PickUpForm {
    pickUpLocation : string;
    dropOffLocation: string;
    pickUpDate : string;
    pickUpTime : string;
    dropOffDate : string;
    dropOffTime : string;

    constructor(
    pickUpLocation? : string,
    dropOffLocation?: string,
    pickUpDate? : string,
    pickUpTime? : string,
    dropOffDate? : string,
    dropOffTime? : string
    ) 

    {
    this.pickUpLocation = pickUpLocation!;
    this. dropOffLocation = dropOffLocation!;
    this.pickUpDate = pickUpDate!;
    this.pickUpTime = pickUpTime!;
    this.dropOffDate = dropOffDate!;
    this.dropOffTime = dropOffTime!
    }
  }
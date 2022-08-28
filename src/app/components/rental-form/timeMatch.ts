import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const timeMatch: ValidatorFn = (control: AbstractControl):
ValidationErrors | null => {
  const pickUpTime = control.get('pickUpTime');
  const dropOffTime = control.get('dropOffTime');
  
  if( pickUpTime && dropOffTime && pickUpTime.value !== dropOffTime.value) {
    dropOffTime?.setErrors({mismatch: true})
    return {timeMismatch: true}
  }

  return null;
}
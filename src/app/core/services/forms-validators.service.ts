import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsValidatorsService {

  checkInput(formControl: FormControl) {
    if (formControl.dirty || formControl.touched) {
      if (formControl.valid) {
        return 'is-valid';
      } else {
        return 'is-invalid';
      }
    }
  }
}

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UniversalValidators } from 'ngx-validators';

export interface INewCustomer {
  name: string;
  surname: string;
  age: number;
  birth_date: string;
}

export class NewCustomerModel {

  public static newModel(): INewCustomer {
    return;
  }

  public static newFormGroup(): FormGroup {

    const fb = new FormBuilder();

    const customerGroup = fb.group({

      name: fb.control('', Validators.required),
      surname: fb.control('', Validators.required),
      age: fb.control('', Validators.compose([Validators.required, UniversalValidators.isNumber, UniversalValidators.isInRange(0, 100)])),
      birth_date: fb.control('', Validators.required)
    });

    return customerGroup;

  }

}


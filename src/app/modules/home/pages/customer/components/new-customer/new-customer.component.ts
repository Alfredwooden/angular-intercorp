import { Component, OnInit } from '@angular/core';
import { NewCustomerModel } from './models/new-customer.models';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-new-customer-component',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})

export class NewCustomerComponent implements OnInit {


  public formGroup = NewCustomerModel.newFormGroup();

  constructor(public firebaseService: FirebaseService

  ) { }

  ngOnInit() {

  }

  submit() {
    this.firebaseService.createCustomer(this.formGroup.value)
      .then(
        res => {
          console.log(res);
        }
      );
  }



}

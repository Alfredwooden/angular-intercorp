import { Component, OnInit, Input } from '@angular/core';
import { NewCustomerModel } from './models/new-customer.models';

@Component({
  selector: 'app-new-customer-component',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  public formGroup = NewCustomerModel.newFormGroup();

  constructor() { }

  ngOnInit() {
  }

  submit() {

  }

}

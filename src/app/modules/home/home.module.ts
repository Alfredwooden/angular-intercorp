import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { CustomerDetailComponent } from './pages/customer-details/customer-detail.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CUSTOMER_COMPONENTS } from './pages/customer/components';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerDetailComponent,
    ...CUSTOMER_COMPONENTS
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }

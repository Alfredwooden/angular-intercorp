import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDetailComponent } from './pages/customer-details/customer-detail.component';
import { CustomerComponent } from './pages/customer/customer.component';

const routes: Routes = [
  { path: 'customer-component', component: CustomerComponent },
  { path: 'customer-detail', component: CustomerDetailComponent },
  { path: '**', component: CustomerComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class HomeRoutingModule { }

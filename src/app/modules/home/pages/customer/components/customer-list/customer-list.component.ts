import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

export interface CustomerDetail {
  name: string;
  surname: string;
  age: number;
  birth_date: Date;
}


@Component({
  selector: 'app-customer-list-component',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname', 'age', 'birth_date'];
  ageAverage = 0;

  private CustomerCollection: AngularFirestoreCollection<CustomerDetail>;
  customers: Observable<CustomerDetail[]>;


  constructor(private fs: FirebaseService, private afs: AngularFirestore) {
    this.CustomerCollection = afs.collection<CustomerDetail>('customers');
    this.customers = this.CustomerCollection.valueChanges();

  }

  ngOnInit() {
    // this.AgeAvg();
  }

  // public AgeAvg() {

  //   const values = []
  //   const sum = values.reduce((previous, current) => current += previous);
  //   this.ageAverage = sum / values.length;
  //   console.log(this.ageAverage);

  // }


}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  getCustomer(userKey) {
    return this.db.collection('customers').doc(userKey).snapshotChanges();
  }

  getCustomers() {
    return this.db.collection('customers').snapshotChanges();
  }

  createCustomer(value) {
    return this.db.collection('customers').add({
      name: value.name,
      surname: value.surname,
      age: value.age,
      birth_date: value.birth_date,
    });
  }

}

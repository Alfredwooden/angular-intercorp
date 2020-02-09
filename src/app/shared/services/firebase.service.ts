import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  getUser(userKey) {
    return this.db.collection('customers').doc(userKey).snapshotChanges();
  }

  getUsers() {
    return this.db.collection('customers').snapshotChanges();
  }

  createUser(value) {
    return this.db.collection('customers').add({
      name: value.name,
      surname: value.surname,
      // tslint:disable-next-line: radix
      age: value.age,
      birth_date: value.birth_date,
    });
  }

}

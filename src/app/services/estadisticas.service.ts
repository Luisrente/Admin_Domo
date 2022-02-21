import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private firestore: AngularFirestore) { }

  getOferta(): Observable<any>{
    return  this.firestore.collection('offer').snapshotChanges()
  }


}

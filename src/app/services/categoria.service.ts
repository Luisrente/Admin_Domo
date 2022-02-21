import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  private categoria$=new Subject<any>();

  constructor(private firestore: AngularFirestore) { }



    addCategoria(cate:categoria): Promise<any>{
      return this.firestore.collection('category').add(cate);
     }

    getCategoria(): Observable<any>{
      return  this.firestore.collection('category').snapshotChanges()
    }

    deleteCategoria(id:string): Promise <any>{
     return this.firestore.collection('category').doc(id).delete();
    }

    addCategoriaEdit(cate:categoria){
      this.categoria$.next(cate);
    }
    
    getCategoriaEdit():Observable<categoria>{
      return this.categoria$.asObservable();
    }


  
}

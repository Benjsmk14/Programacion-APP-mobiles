import { Injectable } from '@angular/core';
//librerias
import { Observable, Timestamp } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class CrudfirebaseService {

  constructor(private firestore:AngularFirestore) {}

    crearViajes(Viajes : Viajes){
      return this.firestore.collection('Viajes').add(Viajes)
   }
   obtenerViajes(): Observable<Viajes[]> {
    return this.firestore.collection<Viajes>('Viajes').valueChanges({idField:'id'});
  }
  eliminarViajes(id: any) {
    return this.firestore.collection('Viajes').doc(id).delete();
  }
} 

//crear un modelo de la coleccio
export interface Viajes{
  id?:string;
  destino:string;
  capacidad: number | null;
  precio: number | null;
  hora:string;
  encuentro:string;
}

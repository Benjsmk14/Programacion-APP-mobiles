import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 

// Definición de la interfaz Usuario
export interface Usuario {
  id?: string;
  correo: string;
  nombreUsuario: string;
  contrasenna: string;
  nombreApellido: string;
}

// Definición de la interfaz Viajes
export interface Viajes {
  id?: string;
  destino: string;
  capacidad: number | null;
  precio: number | null;
  hora: string;
  encuentro: string;
}
=======
//librerias
import { Observable, Timestamp } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore'
>>>>>>> 3ca3e64ead575a44cba624c47fc0918a697a1dc7

@Injectable({
  providedIn: 'root'
})
export class CrudfirebaseService {
<<<<<<< HEAD
  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) {}

  crearUsuario(usuario: Usuario) {
    return this.firestore.collection('Usuario').add(usuario);
  }

  // Método para iniciar sesión con nombre de usuario
  iniciarSesion(nombreUsuario: string, contrasena: string): Promise<Usuario | null> {
    return this.firestore.collection<Usuario>('Usuario', ref => ref.where('nombreUsuario', '==', nombreUsuario))
      .get().toPromise().then(snapshot => {
        if (!snapshot || snapshot.empty) { // Verifica si el snapshot es nulo o está vacío
          throw new Error('Usuario no encontrado');
        }
        const user = snapshot.docs[0].data();
        if (user.contrasenna === contrasena) {
          return user;
        } else {
          throw new Error('Contraseña incorrecta');
        }
      }).catch(error => {
        console.error('Error al iniciar sesión:', error);
        throw error; // Relanzar el error para que pueda ser manejado por el llamador
      });
  }

  crearViajes(viajes: Viajes) {
    return this.firestore.collection('Viajes').add(viajes);
  }

  obtenerViajes(): Observable<Viajes[]> {
    return this.firestore.collection<Viajes>('Viajes').valueChanges({ idField: 'id' });
  }

  eliminarViajes(id: any) {
    return this.firestore.collection('Viajes').doc(id).delete();
  }
=======

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
>>>>>>> 3ca3e64ead575a44cba624c47fc0918a697a1dc7
}

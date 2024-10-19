import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
<<<<<<< HEAD
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importar AngularFireAuth

=======
>>>>>>> 3ca3e64ead575a44cba624c47fc0918a697a1dc7
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
<<<<<<< HEAD
export class HomePage implements OnInit {
  usuario: string = '';  // Variable para almacenar el nombre del usuario

  constructor(private navCtrl: NavController, private afAuth: AngularFireAuth) { }  // Inyectar AngularFireAuth

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.usuario = user.email || '';  
        this.usuario = '';  
      }
    });
  }

=======
export class HomePage {
usuario:string=''
  constructor(private navCtrl: NavController) { }

  ngOnInit(): void {
    this.usuario=localStorage.getItem("usuario") ?? ''
  }


>>>>>>> 3ca3e64ead575a44cba624c47fc0918a697a1dc7
  programar() {
    this.navCtrl.navigateForward(['/programar-viaje']);
  }

<<<<<<< HEAD
  misviajes() {
    this.navCtrl.navigateForward(['/misviajes']);
  }

  cancelarviaje() {
    this.navCtrl.navigateForward(['/cancelarviaje']);
  }

  cerrar_sesion() {
    this.afAuth.signOut().then(() => {  // Cerrar sesión en Firebase
      this.navCtrl.navigateForward(['/elegir']);  // Redirigir al usuario
    });
  }

  iniciar_viaje() {
=======
  misviajes(){
    this.navCtrl.navigateForward(['/misviajes']);
  }

  cancelarviaje(){
    this.navCtrl.navigateForward(['/cancelarviaje']);
  }
  cerrar_sesion(){
    this.navCtrl.navigateForward(['/elegir']);
  }

  iniciar_viaje(){
>>>>>>> 3ca3e64ead575a44cba624c47fc0918a697a1dc7
    this.navCtrl.navigateForward(['/iniciar-viaje']);
  }
}

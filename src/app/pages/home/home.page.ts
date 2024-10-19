import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importar AngularFireAuth

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
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

  programar() {
    this.navCtrl.navigateForward(['/programar-viaje']);
  }

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
    this.navCtrl.navigateForward(['/iniciar-viaje']);
  }
}

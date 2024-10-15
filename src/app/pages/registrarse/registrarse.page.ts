import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'; // Importar NavController y AlertController

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  nuevoUsuario: string = '';
  nuevaContrasena: string = '';

  // Inyectar NavController y AlertController en el constructor
  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

  ngOnInit() {}

  registrar() {
    // Verificamos que ambos campos estén llenos
    if (this.nuevoUsuario.trim() === '' || this.nuevaContrasena.trim() === '') {
      this.presentAlert('Registro Fallido', 'Por favor, complete ambos campos.');
      return;
    }

    // Guardamos el usuario y la contraseña en localStorage
    localStorage.setItem('usuario', this.nuevoUsuario);
    localStorage.setItem('contrasena', this.nuevaContrasena);

    this.presentAlert('Registro Exitoso', 'Cuenta creada correctamente.');

    // Redirigimos al usuario al login después de registrar la cuenta
    this.navCtrl.navigateForward(['/login1']);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { CrudfirebaseService } from 'src/app/servicio/crudfirebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  contrasena: string = '';

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private CrudServ: CrudfirebaseService) { }

  ngOnInit() {}

  validar() {
    this.CrudServ.iniciarSesion(this.usuario, this.contrasena)
      .then((user) => {
        // Navegar a la página principal después de iniciar sesión
        this.navCtrl.navigateForward(['/home']);
      })
      .catch((error) => {
        console.error("Error de inicio de sesión: ", error);
        this.presentAlert(error.message);
      });
  }

  async presentAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Login',
      subHeader: 'Validación usuario',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  restablecer() {
    this.navCtrl.navigateForward(['/restablecer', this.usuario]);
  }
}

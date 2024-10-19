import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
<<<<<<< HEAD
import { CrudfirebaseService } from 'src/app/servicio/crudfirebase.service';
=======
>>>>>>> 3ca3e64ead575a44cba624c47fc0918a697a1dc7

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
<<<<<<< HEAD
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
=======

  usuario: string = '';
  contrasena: string = '';

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  validar() {
    
    const contrasenaAlmacenada = localStorage.getItem('contrasena') || '1234'; 

    if (this.contrasena === contrasenaAlmacenada) {
      localStorage.setItem('usuario', this.usuario);
      this.navCtrl.navigateForward(['/home']);
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Login',
      subHeader: 'Validación usuario',
      message: 'Usuario o contraseña incorrectos',
      buttons: ['OK'],
    });

>>>>>>> 3ca3e64ead575a44cba624c47fc0918a697a1dc7
    await alert.present();
  }

  restablecer() {
    this.navCtrl.navigateForward(['/restablecer', this.usuario]);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 3ca3e64ead575a44cba624c47fc0918a697a1dc7

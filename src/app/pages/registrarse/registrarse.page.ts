import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavController, AlertController } from '@ionic/angular';
import { CrudfirebaseService, Usuario } from 'src/app/servicio/crudfirebase.service';

declare var grecaptcha: any;
=======
import { NavController, AlertController } from '@ionic/angular'; // Importar NavController y AlertController
>>>>>>> 3ca3e64ead575a44cba624c47fc0918a697a1dc7

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
<<<<<<< HEAD
  nuevo_Usuario: Usuario = { correo: '', nombreUsuario: '', contrasenna: '', nombreApellido: '' };
  confirmacionContrasenna: string = ''; 
  recaptchaResponse: string | undefined;

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private CrudServ: CrudfirebaseService) {}

  ngOnInit() {
    this.loadRecaptcha();
  }

  registrar() {
    if (!this.recaptchaResponse) {
      this.presentAlert('Registro Fallido', 'Por favor, verifica que no eres un robot.');
      return;
    }
    if (this.nuevo_Usuario.contrasenna !== this.confirmacionContrasenna) {
      this.presentAlert('Registro Fallido', 'Las contraseñas no coinciden.');
      return;
    }


    this.CrudServ.crearUsuario(this.nuevo_Usuario).then(() => {
      this.presentAlert('Registro Exitoso', 'Cuenta creada correctamente.');
      this.navCtrl.navigateForward(['/elegir']);
    })
    .catch((err: any) => {
      console.log("Error", err);
      this.presentAlert('Error', 'Hubo un problema al crear la cuenta.');
    });
  }

  loadRecaptcha() {
    if (typeof grecaptcha !== 'undefined') {
      grecaptcha.render('recaptcha', {
        'sitekey': '6LemLGQqAAAAAP4EU55TZ4A5PkG-oAIHdXdQ7kJW',
        'callback': (response: string) => this.onCaptchaResolved(response)
      });
    }
=======

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
>>>>>>> 3ca3e64ead575a44cba624c47fc0918a697a1dc7
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
<<<<<<< HEAD
    await alert.present();
  }

  onCaptchaResolved(captchaResponse: string) {
    this.recaptchaResponse = captchaResponse;
  }
=======

    await alert.present();
  }
>>>>>>> 3ca3e64ead575a44cba624c47fc0918a697a1dc7
}

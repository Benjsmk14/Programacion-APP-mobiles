import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/model/viajes';  
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cancelarviaje2',
  templateUrl: './cancelarviaje2.page.html',
  styleUrls: ['./cancelarviaje2.page.scss'],
})
export class Cancelarviaje2Page implements OnInit {

  viajes: Viaje[] = [];

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cargarViajes();
  }

  cargarViajes() {
    if (localStorage.getItem("viajes")) {
      this.viajes = JSON.parse(localStorage.getItem("viajes") ?? '[]');
      console.log("Viajes Cargados:", this.viajes);
    } else {
      console.log("No hay viajes almacenados");
    }
  }

  async anularViaje(viaje: Viaje) {
    // Confirmar antes de anular el viaje
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Anulación',
      message: `¿Estás seguro de que deseas anular el viaje a ${viaje.destino}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Acción de anulación cancelada');
          }
        }, {
          text: 'Anular',
          handler: () => {
            // Eliminar el viaje del array
            this.viajes = this.viajes.filter(v => 
              v.destino !== viaje.destino || 
              v.hora !== viaje.hora || 
              v.encuentro !== viaje.encuentro // Puedes ajustar las condiciones según tus necesidades
            );

            // Actualizar el almacenamiento local
            localStorage.setItem("viajes", JSON.stringify(this.viajes));
            console.log("Viaje Anulado:", viaje);
            // Mostrar mensaje de éxito
            this.mostrarAlerta('Éxito', 'El viaje ha sido anulado con éxito.');
          }
        }
      ]
    });

    await alert.present();
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  qr() {
    this.navCtrl.navigateForward(['/qr']);
  }
}

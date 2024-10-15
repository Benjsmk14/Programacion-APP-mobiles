import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/model/viajes';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-buscarviaje',
  templateUrl: './buscarviaje.page.html',
  styleUrls: ['./buscarviaje.page.scss'],
})
export class BuscarviajePage implements OnInit {

  viajes: Viaje[] = [];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.cargarViajes();
  }

  cargarViajes() {
    if (localStorage.getItem("viajes")) {
      this.viajes = JSON.parse(localStorage.getItem("viajes") ?? '[]');
      console.log("Viajes Cargados en Buscar Viaje:", this.viajes);
    } else {
      console.log("No hay viajes almacenados");
    }
  }


  detalleviaje(viaje: Viaje) {
  this.navCtrl.navigateForward(['/detalleviaje', { viaje: JSON.stringify(viaje) }]);
}

}

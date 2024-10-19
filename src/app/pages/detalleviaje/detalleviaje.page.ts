import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Viaje } from 'src/app/model/viajes';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalleviaje',
  templateUrl: './detalleviaje.page.html',
  styleUrls: ['./detalleviaje.page.scss'],
})
export class DetalleviajePage implements OnInit {
  viajes: Viaje[] = [];

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }
 
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['viaje']) {
        const viaje = JSON.parse(params['viaje']);
        this.viajes = [viaje]; // Crear un array con el viaje específico
      } else {
        this.cargarViajes(); // Solo se usará si no se pasa ningún viaje
      }
    });
  }
  
  aceptarViaje(viaje: Viaje) {
    if (viaje.capacidad > 0) {
      viaje.capacidad -= 1; 
      if (viaje.capacidad === 0) {
        viaje.estado = 'Vehículo lleno';
      }

      let viajes = JSON.parse(localStorage.getItem("viajes") ?? '[]');
      viajes = viajes.map((v: Viaje) => v.destino === viaje.destino && v.hora === viaje.hora ? viaje : v);
      localStorage.setItem("viajes", JSON.stringify(viajes));

      
      this.navCtrl.navigateForward(['/pagar']);
    }
  } 
  cargarViajes() {
    if (localStorage.getItem("viajes")) {
      this.viajes = JSON.parse(localStorage.getItem("viajes") ?? '[]');
      console.log("Viajes Cargados en Buscar Viaje:", this.viajes);
    } else {
      console.log("No hay viajes almacenados");
    }
  }


}

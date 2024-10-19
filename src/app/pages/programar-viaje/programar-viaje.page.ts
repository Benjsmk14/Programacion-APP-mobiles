import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Viaje } from 'src/app/model/viajes';  // Asegúrate de que la ruta sea correcta

import { CrudfirebaseService,Viajes } from 'src/app/servicio/crudfirebase.service';

@Component({
  selector: 'app-programar-viaje',
  templateUrl: './programar-viaje.page.html',
  styleUrls: ['./programar-viaje.page.scss'],
})
export class ProgramarViajePage implements OnInit {

  constructor(private CrudServ: CrudfirebaseService, private navCtrl: NavController) {}

  nuevo_Viajes: Viajes = {destino:'',capacidad: null,precio: null,hora:'',encuentro:''}


  ngOnInit() { 
  }

  grabar(){    // Validación antes de enviar
    if (!this.nuevo_Viajes.destino||
      this.nuevo_Viajes.capacidad === null || this.nuevo_Viajes.capacidad <= 0 ||  // Verificar si capacidad es null o <= 0
      this.nuevo_Viajes.precio === null || this.nuevo_Viajes.precio <= 0 ||  
      !this.nuevo_Viajes.hora || !this.nuevo_Viajes.encuentro) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }
    this.CrudServ.crearViajes(this.nuevo_Viajes).then(()=>{
      alert("Viaje Creado")
    })
    .catch((err)=>{
      console.log("Error")
    })
    this.navCtrl.navigateForward(['/misviajes']);
  }
}

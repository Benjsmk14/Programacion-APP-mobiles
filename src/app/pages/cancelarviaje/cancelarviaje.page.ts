import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/model/viajes';  
import { NavController, AlertController } from '@ionic/angular';

import { CrudfirebaseService,Viajes } from 'src/app/servicio/crudfirebase.service';

@Component({
  selector: 'app-cancelarviaje',
  templateUrl: './cancelarviaje.page.html',
  styleUrls: ['./cancelarviaje.page.scss'],
})
export class CancelarviajePage implements OnInit {

  viajes: Viajes[] = [];

  constructor(private crudServ: CrudfirebaseService,private navCtrl: NavController) { }

  ngOnInit() {
    this.crudServ.obtenerViajes().subscribe(viajes => {
      this.viajes = viajes;
    });
  }

  cargarViajes() {
    this.crudServ.obtenerViajes().subscribe(viajes => {
      this.viajes = viajes;
      console.log("Viajes Cargados:", this.viajes);
    });
  }

  eliminarViaje(id: any) {
    this.crudServ.eliminarViajes(id).then(()=>{
      alert("Viaje Anulado")
    }).catch((err)=>{
      console.log(err)
    })
  }

  qr() {
    this.navCtrl.navigateForward(['/qr']);
  }
}

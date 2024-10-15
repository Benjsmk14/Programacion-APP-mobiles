import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/model/viajes';  
import { NavController } from '@ionic/angular';

import { CrudfirebaseService,Viajes } from 'src/app/servicio/crudfirebase.service';

@Component({
  selector: 'app-misviajes',
  templateUrl: './misviajes.page.html',
  styleUrls: ['./misviajes.page.scss'],
})
export class MisviajesPage implements OnInit {

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

  vermas() {
    this.navCtrl.navigateForward(['/iniciar-viaje']);
  }
  home(){
    this.navCtrl.navigateForward(['/home'])
  }



}

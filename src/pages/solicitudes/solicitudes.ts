import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { UsuariosProvider } from '../../providers/usuarios/usuarioProvider';
import { Solicitud } from '../../models/solicitud.modelo';
import { Storage } from '@ionic/storage';
import { SolicitudCrearPage } from '../solicitud-crear/solicitud-crear';

/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitudes',
  templateUrl: 'solicitudes.html',
})
export class SolicitudesPage {

  solicitudes: Array<Solicitud> = [];
  usuarioId: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private usuarioProvider: UsuariosProvider,
    public alertCtrl: AlertController,
    public storage: Storage
  ) {
  }

  ionViewDidLoad() {
    
    this.verSolicitudes(this.usuarioId);
  }

  verSolicitudes(idUs) {
    this.storage.get('id').then((val) => {
      console.log(val);
      this.usuarioProvider.verSolicitudes(val).subscribe(data => {
        this.solicitudes = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    });
    
  }

  crearSolicitud(){
    this.navCtrl.push(SolicitudCrearPage);
  }

}

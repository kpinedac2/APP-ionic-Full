import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SolicitudTipo } from '../../models/solicitud-tipo.modelo';
import { UsuariosProvider } from '../../providers/usuarios/usuarioProvider';
import { Usuario } from '../../models/usuario.modelo';
import { Storage } from '@ionic/storage';
import { SolicitudesPage } from '../solicitudes/solicitudes';

/**
 * Generated class for the SolicitudCrearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitud-crear',
  templateUrl: 'solicitud-crear.html',
})
export class SolicitudCrearPage {

  formulario: FormGroup;
  tiposSolicitud: Array<SolicitudTipo> = [];
  usuarios: Array<Usuario> = [];
  public usuarioId;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private usuarioProvider: UsuariosProvider,
    public alertCtrl: AlertController,
    public storage: Storage
  ) {

    this.storage.get('id').then((val) => {
      console.log(val);
      this.usuarioId = val;
    });

    this.formulario = this.fb.group({

      horasPermiso: 0,
      solicitudDescripcion: '',
      solicitudEstado: false,
      solicitudFecha: '2018-11-21T06:00:00.000+0000',
      tipo_solicitud_id: '',
      usuario_id: ''
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudCrearPage');
    this.verTipos();
    this.verUsuarios();
  }

  verTipos(){
    this.usuarioProvider.verSolicitudesTipos().subscribe(data => {
      this.tiposSolicitud = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  verUsuarios(){
    this.usuarioProvider.listarUsuarios().subscribe(data => {
      this.usuarios = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  guardarCliente() {
    //console.log(this.formulario.value);
    //let headers = new Headers('Content-Type':'aplication/json')
    this.usuarioProvider.crearSolicitud(this.formulario.value).subscribe(data => {
      console.log(this.formulario.value);
        const alert = this.alertCtrl.create({
          title: 'Enviada!',
          subTitle: 'Espere la respuesta de su jefe',
          buttons: [{
            text : "OK",
            handler: data => {
              this.navCtrl.setRoot(SolicitudesPage);
            }
          }]
        });
        alert.present();


      
    }, err => {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Ocurrió un error al enviar la solicitud',
        buttons: ['OK']
      });
      alert.present();
      console.log(err);
    }) 
  }

}

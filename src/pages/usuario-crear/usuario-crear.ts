import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarioProvider';
import { Empleado } from '../../models/empleado.modelo';
import { Rol } from '../../models/rol.modelo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListPage } from '../list/list';
import { Sesion } from '../../models/sesion.modelo';

/**
 * Generated class for the UsuarioCrearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario-crear',
  templateUrl: 'usuario-crear.html',
})
export class UsuarioCrearPage {

  empleados: Array<Empleado> = [];
  roles: Array<Rol> = [];
  
  formulario: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usuarioProvider: UsuariosProvider,
    private fb: FormBuilder,
    public alertCtrl: AlertController
  ) {
    this.formulario = this.fb.group({
      usuarioNombre: '',
      empleadoId: 0,
      usuarioClave: '',
      rolId: 0
    });

    
  }

  ionViewDidLoad() {
    this.usuarioProvider.listarEmpleados().subscribe(data => {
      this.empleados = data;
    }, error => {
      console.log(error);
    });

    this.usuarioProvider.listarRoles().subscribe(data => {
      this.roles = data;
    }, error => {
      console.log(error);
    });
  }

  guardarUsuario() {
    console.log(this.formulario.value);
    this.usuarioProvider.crearUsuario(this.formulario.value).subscribe(data => {
 
        const alert = this.alertCtrl.create({
          title: 'Creado',
          subTitle: 'Usuario registrado',
          buttons: [{
            text: "OK",
            handler: data => {
              this.navCtrl.setRoot(ListPage);
            }
          }]
        });
        alert.present();
      
    }, error => {
      console.log(error);
    })
  }

}

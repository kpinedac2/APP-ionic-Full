import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsuarioCrearPage } from '../usuario-crear/usuario-crear';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Sesion } from '../../models/sesion.modelo';
import { UsuariosProvider } from '../../providers/usuarios/usuarioProvider';
import { Usuario } from '../../models/usuario.modelo';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  images = ['electronic.jpg'];

  sesion: Array<Sesion> = [];
  usuarios: Array<Usuario> = [];
  usuario: Usuario = null;
  formSesion: FormGroup;
  

  public idUser: number;
  key: 'user_id';
  passUser: string;
  key2: 'usuarioClave';
  public permiso: boolean;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private usuarioProvider: UsuariosProvider,
    public alertCtrl: AlertController,
    public storage: Storage
    
  ) {
    this.remover();

    this.formSesion = this.fb.group({
      usuario_id: '',
      clave: ''
    });
    
  }
  
  guardarUsuario() {
   //console.log(this.idUser);
    
    this.guardar();
    this.mostrar();
    this.remover();
    this.usuarioPorId(this.idUser);

  }

  guardar(){
    this.storage.set('id', this.idUser);
  }
  remover(){
    this.storage.remove('id');
  }

  mostrar() {
    this.storage.get('id').then((val) => {
      console.log(val); 
    });
  }

  usuarioPorId(id: number): Usuario {
    var us: Usuario;
    this.usuarioProvider.usuarioPorId(id).subscribe(data => {
      us = data;

      if (this.passUser != us.usuarioClave) {
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Contraseña incorrecta',
          buttons: [{
            text: "OK",
            handler: data => {
              this.navCtrl.setRoot(LoginPage);
            }
          }]
        });
        alert.present();
      } else {
        this.permiso = true;
        this.navCtrl.setRoot(HomePage, { per: this.permiso });
      }

      /*  console.log(us); */
    }, error => {
      console.log(error);
      return null;
    });
    return null;

  }

  ionViewDidLoad() {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuarioProvider.listarUsuarios().subscribe(data => {
      this.usuarios = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}

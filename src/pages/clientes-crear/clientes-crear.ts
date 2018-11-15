import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { ClientesListarPage } from '../clientes-listar/clientes-listar';
import { Municipio } from '../../models/municipio.modelo';
import { ProductoProvider } from '../../providers/producto/producto';

/**
 * Generated class for the ClientesCrearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes-crear',
  templateUrl: 'clientes-crear.html',
})
export class ClientesCrearPage {

  formulario: FormGroup;
  municipios: Array<Municipio> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private clienteProvider: ClienteProvider,
    public alertCtrl: AlertController
  ) {

    this.formulario = this.fb.group({

      clienteNombres: '',
      clienteApellidos: '',
      clienteTelefono: '',
      clienteNit: '',
      clienteDeuda: '',
      clienteDireccion: '',
      clienteSexo: '',
      municipio_id: ''

    });
  }

  ionViewDidLoad() {
    this.listarMunicipios();
    console.log('ionViewDidLoad ClientesCrearPage');
  }

  listarMunicipios() {
    this.clienteProvider.verMunicpios().subscribe(data => {
      this.municipios = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  guardarCliente() {
    //console.log(this.formulario.value);
    //let headers = new Headers('Content-Type':'aplication/json')
    this.clienteProvider.crearCliente(this.formulario.value).subscribe(data => {
      console.log(this.formulario.value);
      

        const alert = this.alertCtrl.create({
          title: '¡Agregado!',
          subTitle: 'Cliente agregado correctamente!',
          buttons: [{
            text : "OK",
            handler: data => {
              this.navCtrl.setRoot(ClientesListarPage);
            }
          }]
        });
        alert.present();


      
    }, err => {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Ocurrió un error al ingresar cliente',
        buttons: ['OK']
      });
      alert.present();
      console.log(err);
    })
  }

}

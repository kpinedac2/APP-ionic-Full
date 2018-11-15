import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { Cliente } from '../../models/cliente.modeo';
import { ClientesDetallesPage } from '../clientes-detalles/clientes-detalles';
import { ClientesCrearPage } from '../clientes-crear/clientes-crear';

/**
 * Generated class for the ClientesListarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes-listar',
  templateUrl: 'clientes-listar.html',
})
export class ClientesListarPage {
  clientes: Array<Cliente> = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public clienteProvider: ClienteProvider,
    public modalCtrl: ModalController,
    public ctrlAlert: AlertController

  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesListarPage');
    this.listarClientes();
  }

  listarClientes() {
    this.clienteProvider.listarClientes().subscribe(data => {
      this.clientes = data;
    }, error => {
      console.log(error);
    });
  }
  
  vistaCrear(){
    this.navCtrl.push(ClientesCrearPage);
  }

  editarCliente(id){

  }

  detalleCliente(cliente) {
    this.navCtrl.push(ClientesDetallesPage, {cliente: cliente});
    
  }
  
  borrarCliente(id){

  }

}

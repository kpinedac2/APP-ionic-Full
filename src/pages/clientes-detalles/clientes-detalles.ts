import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { ClientesListarPage } from '../clientes-listar/clientes-listar';
import { Cliente } from '../../models/cliente.modeo';
import { Municipio } from '../../models/municipio.modelo';
import { InfoCliente } from '../../models/infocliente.modelo';

@IonicPage()
@Component({
  selector: 'page-clientes-detalles',
  templateUrl: 'clientes-detalles.html',
})
export class ClientesDetallesPage {

  formulario: FormGroup;

  public cliente: Cliente = null;
  public info: InfoCliente = null;

  public nombres: string;
  public direccion: string;
  public sexo: string;
  public deuda: number;
  public compras: number;
  public fecha_deuda: string;
  public telefono: string


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private clienteProvider: ClienteProvider,
    public alertCtrl: AlertController
  ) {

    this.formulario = this.fb.group({

      ClienteId: this.navParams.data.ClienteId,
      NombreCliente: this.navParams.data.NombreCliente,
      Clave: this.navParams.data.Clave,
      DPI: this.navParams.data.DPI,
      NIT: this.navParams.data.NIT,
      Telefono: this.navParams.data.Telefono,
      Direccion: this.navParams.data.Direccion,
      FechaRegistro: this.navParams.data.FechaRegistro

    });

    this.cliente = this.navParams.get('cliente');
    //console.log(this.cliente);
    //console.log(JSON.stringify(this.cliente.clienteSexo));
    this.infoClientes(this.cliente.id);

  }


  cancelarEditar() {
    this.navCtrl.setRoot(ClientesListarPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesDetallesPage');
  }

  infoClientes(id) {
    this.clienteProvider.infoClientes(id).subscribe(data => {
      this.info = data;

      this.nombres = this.info.nombres;
      this.direccion = this.info.direccion;
      this.sexo = this.info.sexo;
      this.deuda = this.info.deuda;
      this.telefono = this.info.telefono;
      this.fecha_deuda = this.info.fechaDeuda;
      this.compras = this.info.totalComprado;

    }, error => {
      console.log(error);
    });
  }

}

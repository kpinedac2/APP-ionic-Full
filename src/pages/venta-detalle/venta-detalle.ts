import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Producto } from '../../models/producto.modelo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductoProvider } from '../../providers/producto/producto';
import { UsuariosProvider } from '../../providers/usuarios/usuarioProvider';
import { VentaProvider } from '../../providers/ventaProvider/ventaPeovider';
import { VentaDetalle } from '../../models/ventadetalle.modelo';
import { Venta } from '../../models/venta.modelo';
import { FacturaPage } from '../factura/factura';

/**
 * Generated class for the VentaDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-venta-detalle',
  templateUrl: 'venta-detalle.html',
})
export class VentaDetallePage {


  productos: Array<Producto> = [];
  producto: Producto = null;
  detalle: VentaDetalle = null;
  venta: Venta = null;
  public idProducto: number;
  rows = [];

  tablestyle = 'bootstrap';
  formulario: FormGroup;
  formUpdate: FormGroup;
  public idVenta = 0;
  public cantidad = 0;
  public precio = 0;
  public subtotal = 0;
  public ventaActual = 0;
  public ventaNueva = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private productoProvider: ProductoProvider,
    private fb: FormBuilder,
    public alertCtrl: AlertController,
    private ventaProvider: VentaProvider
  ) {
    this.formulario = this.fb.group({
      cantidadVendida: 0,
      precioProducto: 0,
      subtotal: 0,
      producto_id: '',
      venta_id: ''
    });

    this.idVenta = this.navParams.get('idVenta');
    console.log('id que traigo '+this.idVenta);
  }

  ionViewDidLoad() {
    this.listarP();
  }

  crearVenta() {
    console.log(this.formulario.value);
    var ven = JSON.stringify('{\"ventaTotal\":\"'+this.ventaNueva+'\"}');
   
      console.log( JSON.parse(ven));
     this.ventaProvider.venderDetalle(this.formulario.value).subscribe(data => {
      
      this.actualizarVenta(JSON.parse(ven), this.idVenta);
      const alert = this.alertCtrl.create({
        title: 'Agregado',
        subTitle: 'Producto agregado a la venta',
        buttons: [{
          text: "OK",
          handler: data => {
            this.navCtrl.setRoot(VentaDetallePage, {idVenta: this.idVenta});
          }
        }]
      });
      alert.present();

    }, error => {
      console.log(error);

    }) 
  }

  verProducto(id) {
    this.listarPorId(id);

  }
  calcular() {

    this.precio = this.producto.precioVenta;
    this.detalle = this.formulario.value;
    this.cantidad = this.detalle.cantidadVendida;

    this.subtotal = this.precio * this.cantidad;

    this.ventaPorId(this.idVenta);
    
  }

  actualizarVenta(venta, id) {
    this.ventaProvider.actualizarVenta(venta, id)
      .subscribe(data => {

      }, err => {
        if (!err) {
          console.log('no-error');
        }

      })
  }

  listarPorId(id) {
    this.productoProvider.productoPorId(id).subscribe(data => {
      this.producto = data;
      console.log(this.producto);
    }, error => {
      console.log(error);
    });
  }

  ventaPorId(id) {
    this.ventaProvider.ventaPorId(id).subscribe(data => {
      this.venta = data;
      this.ventaActual = this.venta.ventaTotal;
      this.ventaNueva = ( Number(this.subtotal)+(Number(this.ventaActual)) );
      
      console.log(this.ventaNueva);
    }, error => {
      console.log(error);
    });
  }

  listarP() {
    this.productoProvider.listarProductos().subscribe(data => {
      this.productos = data;
      /* console.log(data); */
    }, error => {
      console.log(error);
    });
  }

  verDetalles(){
    this.navCtrl.setRoot(FacturaPage, {idVenta: this.idVenta});
  }

}

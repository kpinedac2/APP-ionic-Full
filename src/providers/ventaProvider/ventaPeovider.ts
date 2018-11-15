import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venta } from '../../models/venta.modelo';
import { Observable } from 'rxjs';
import { VentaTipo } from '../../models/ventatipo.modelo';
import { Cliente } from '../../models/cliente.modeo';
import { VentaTotal } from '../../models/ventaTotal.modelo';
import { VentaDetalle } from '../../models/ventadetalle.modelo';
import { Comision } from '../../models/comision.modelo';
import { Storage } from '@ionic/storage';
import { CreditoComprobar } from '../../models/credito.modelo';

/*
  Generated class for the VentaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VentaProvider {
  venta2: Venta = null;
  url = 'http://gamercash.info:8080';

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello VentaProvider Provider');
  }
  
  vender(venta: Venta)  : Observable<any> {
    return this.http.post(this.url+'/usuarios/'+venta.usuario_id+
    '/clientes/'+venta.cliente_id+'/ventatipos/'+venta.venta_tipo_id+'/ventas', venta);
   
  }

  nuevoCredito(credito, idC, idV)  : Observable<any> {
    return this.http.post(this.url+'/clientes/'+idC+
    '/ventas/'+idV+'/creditos', JSON.parse(credito));
  }

  verCreditoId(idC)  : Observable<Array<CreditoComprobar>> {
    return this.http.get<Array<CreditoComprobar>>(this.url+'/clientes/'+idC+'/creditos');
  }

  venderDetalle(venta: VentaDetalle)  : Observable<any> {
    return this.http.post(this.url+'/productos/'+venta.producto_id+
    '/ventas/'+venta.venta_id+'/ventadetalles', venta);
  }

  listarTipoVenta()  : Observable<Array<VentaTipo>> {
    return this.http.get<Array<VentaTipo>>(this.url+'/ventatipos');
  }


  listarUsuarios()  : Observable<Array<VentaTipo>> {
    return this.http.get<Array<VentaTipo>>(this.url+'/usuarios');
  }

  listarVentas()  : Observable<Array<Venta>> {
    return this.http.get<Array<Venta>>(this.url+'/ventas');
  }

  ventaTotal(id:number)  : Observable<VentaTotal> {
    return this.http.get<VentaTotal>(this.url+'/ventastotales/'+id);
  }

  comisionTotal(id:number)  : Observable<Comision> {
    return this.http.get<Comision>(this.url+'/comisiones/'+id);
  }

  actualizarVenta( venta, id) : Observable<any>{
    console.log(venta+" "+id);
    return this.http.put(this.url+'/ventas/'+id, JSON.parse(venta));
  }

  ventaPorId(id)  : Observable<Venta> {
    return this.http.get<Venta>(this.url+'/ventas/'+id);
  }

}

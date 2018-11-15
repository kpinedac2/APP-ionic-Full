import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../models/cliente.modeo';
import { Municipio } from '../../models/municipio.modelo';
import { InfoCliente } from '../../models/infocliente.modelo';
import { CreditoComprobar } from '../../models/credito.modelo';

/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteProvider {

  apiUrl = 'http://gamercash.info:8080';
  
  constructor(public http: HttpClient) {
    console.log('Hello ClienteProvider Provider');
  }

  listarClientes()  : Observable<Array<Cliente>> {
    return this.http.get<Array<Cliente>>(this.apiUrl+'/clientes');
  }

  crearCliente(cliente : Cliente) : Observable<any>{
    console.log(cliente);
    return this.http.post<Cliente>(this.apiUrl+'/municipios/'+cliente.municipio_id+'/clientes', cliente);
  }

  editarCliente( cliente : Cliente, id) : Observable<any>{
    return this.http.put<Cliente>(this.apiUrl+'/clientes/'+id, cliente);
  }

  eliminarCliente( id) : Observable<any>{
    console.log(id);
    return this.http.delete<Cliente>(this.apiUrl+'/clientes/'+id);
  }

  verMunicpios()  : Observable<Array<Municipio>> {
    return this.http.get<Array<Municipio>>(this.apiUrl+'/municipios');
  }

  infoClientes(id)  : Observable<InfoCliente> {
    return this.http.get<InfoCliente>(this.apiUrl+'/clientesinfo/'+id);
  }

  comprobarCredito(id)  : Observable<Array<CreditoComprobar>> {
    return this.http.get<Array<CreditoComprobar>>(this.apiUrl+'/clientes/'+id+'/creditos');
  }

}

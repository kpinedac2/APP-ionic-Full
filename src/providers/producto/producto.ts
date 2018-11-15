import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../models/producto.modelo';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProductoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductoProvider {

  url = "http://gamercash.info:8080";

  constructor(public http: HttpClient) {

    console.log('Hello ProductoProvider Provider');
  }

  listarProductos():Observable<Array<Producto>>{
    return this.http.get<Array<Producto>>(this.url+"/productos");
  }

  productoPorId(id):Observable<Producto>{
    return this.http.get<Producto>(this.url+"/productos/"+id);
  }

}

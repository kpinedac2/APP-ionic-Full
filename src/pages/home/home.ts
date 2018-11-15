import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Venta } from '../../models/venta.modelo';
import { VentaProvider } from '../../providers/ventaProvider/ventaPeovider';
import { VentaTotal } from '../../models/ventaTotal.modelo';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { Usuario } from '../../models/usuario.modelo';
import { UsuariosProvider } from '../../providers/usuarios/usuarioProvider';
import { Empleado } from '../../models/empleado.modelo';
import { Comision } from '../../models/comision.modelo';

import { ViewChild, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';


declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  currentMapTrack = null;
 
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
 
  positionSubscription: Subscription;

  cearUsuarioPage = "UsuarioCrearPage";
  venta: Array<Venta> = [];
  totales: VentaTotal = null;
  comisiones: Comision = null;

  per = undefined;

  usarioId: number;
  public totalVenta: number;
  public totalComision: number;

  us: Usuario = null;
  constructor(
    public navCtrl: NavController,
    private ventaProvdier: VentaProvider,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private usuarioProvider: UsuariosProvider,
    public storage: Storage,
    private plt: Platform,
    private geolocation: Geolocation,
  ) {

    this.comprobarSesion();
    this.idEmpleado();
  }


  ionViewDidLoad() {
   /*  this.plt.ready().then(() => {
      this.loadHistoricRoutes();
 
      let mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      this.geolocation.getCurrentPosition().then(pos => {
        let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(latLng);
        this.map.setZoom(16);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }); */
  }
 
  loadHistoricRoutes() {
    /* this.storage.get('routes').then(data => {
      if (data) {
        this.previousTracks = data;
      }
    }); */
  }


  
  startTracking() {
   /*  this.isTracking = true;
    this.trackedRoute = [];
 
    this.positionSubscription = this.geolocation.watchPosition()
      .pipe(
        filter((p) => p.coords !== undefined) //Filter Out Errors
      )
      .subscribe(data => {
        setTimeout(() => {
          this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
          this.redrawPath(this.trackedRoute);
        }, 0);
      }); */
 
  }
 
  redrawPath(path) {
 /*    if (this.currentMapTrack) {
      this.currentMapTrack.setMap(null);
    }
 
    if (path.length > 1) {
      this.currentMapTrack = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: '#ff00ff',
        strokeOpacity: 1.0,
        strokeWeight: 3
      });
      this.currentMapTrack.setMap(this.map);
    } */
  }

  stopTracking() {
 /*    let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
    this.previousTracks.push(newRoute);
    this.storage.set('routes', this.previousTracks);
   
    this.isTracking = false;
    this.positionSubscription.unsubscribe();
    this.currentMapTrack.setMap(null); */
  }
   
  showHistoryRoute(route) {
   /*  this.redrawPath(route); */
  }


  

  idEmpleado() {
    this.storage.get('id').then((val) => {
      this.usarioId = val;
      this.usuarioPorId(val);
      console.log('id usuario sesion'+val);
    });
  }

  comprobarSesion() {
    this.storage.get('id').then((val) => {
      this.usarioId = val;
      if (this.usarioId == null || this.usarioId == undefined) {
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Debe estar logueado',
          buttons: [{
            text: "OK",
            handler: data => {
              this.navCtrl.setRoot(LoginPage);
            }
          }]
        });
        alert.present();
      } else {
        console.log('ingesado');
      }
    });

  }

  usuarioPorId(id: number): Usuario {
    this.usuarioProvider.usuarioPorId(id).subscribe(data => {
      this.us = data;
      var empleadoId: Empleado;
      empleadoId = JSON.parse(JSON.stringify(this.us.empleadoId));

      console.log(empleadoId);
      this.mostrarVentas(Number(empleadoId.id));
      this.mostrarComisiones(Number(empleadoId.id));
    }, error => {
      console.log(error);
      return null;
    });
    return null;

  }

  mostrarVentas(id: number) {
    //console.log(this.idU);
    this.ventaProvdier.ventaTotal(id).subscribe(data => {
      this.totales = data;
      console.log(this.totales.ventaTotal);
      this.totalVenta = this.totales.ventaTotal;

    }, error => {
      console.log(error);
    });
  }

  mostrarComisiones(id: number) {
    //console.log(this.idU);
    this.ventaProvdier.comisionTotal(id).subscribe(data => {
      this.comisiones = data;
      console.log(this.comisiones.comision);
      this.totalComision = this.comisiones.comision;

    }, error => {
      console.log(error);
    });
  }


  listarP() {
    this.ventaProvdier.listarVentas().subscribe(data => {
      this.venta = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }


}

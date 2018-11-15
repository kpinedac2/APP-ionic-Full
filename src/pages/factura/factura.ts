import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FacturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-factura',
  templateUrl: 'factura.html',
})
export class FacturaPage {
  public idVenta = 0;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.idVenta = this.navParams.get('idVenta');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacturaPage');
  }

}

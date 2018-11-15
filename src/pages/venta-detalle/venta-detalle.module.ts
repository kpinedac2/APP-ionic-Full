import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VentaDetallePage } from './venta-detalle';

@NgModule({
  declarations: [
    VentaDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(VentaDetallePage),
  ],
})
export class VentaDetallePageModule {}

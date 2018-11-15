import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacturaPage } from './factura';

@NgModule({
  declarations: [
    FacturaPage,
  ],
  imports: [
    IonicPageModule.forChild(FacturaPage),
  ],
})
export class FacturaPageModule {}

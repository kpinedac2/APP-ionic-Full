import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VentasPage } from './ventas';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    VentasPage,
  ],
  imports: [
    IonicPageModule.forChild(VentasPage),
    NgxDatatableModule
  ],
})
export class VentasPageModule {}

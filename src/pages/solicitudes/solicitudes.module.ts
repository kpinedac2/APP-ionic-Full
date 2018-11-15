import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitudesPage } from './solicitudes';

@NgModule({
  declarations: [
    SolicitudesPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitudesPage),
  ],
})
export class SolicitudesPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitudCrearPage } from './solicitud-crear';

@NgModule({
  declarations: [
    SolicitudCrearPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitudCrearPage),
  ],
})
export class SolicitudCrearPageModule {}

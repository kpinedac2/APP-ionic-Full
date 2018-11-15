import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpleadoCrearPage } from './empleado-crear';

@NgModule({
  declarations: [
    EmpleadoCrearPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpleadoCrearPage),
  ],
})
export class EmpleadoCrearPageModule {}

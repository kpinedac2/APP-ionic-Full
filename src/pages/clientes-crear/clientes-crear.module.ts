import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientesCrearPage } from './clientes-crear';

@NgModule({
  declarations: [
    ClientesCrearPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientesCrearPage),
  ],
})
export class ClientesCrearPageModule {}

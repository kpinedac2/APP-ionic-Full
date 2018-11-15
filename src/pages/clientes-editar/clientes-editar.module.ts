import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientesEditarPage } from './clientes-editar';

@NgModule({
  declarations: [
    ClientesEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientesEditarPage),
  ],
})
export class ClientesEditarPageModule {}

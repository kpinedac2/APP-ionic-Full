import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientesListarPage } from './clientes-listar';

@NgModule({
  declarations: [
    ClientesListarPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientesListarPage),
  ],
})
export class ClientesListarPageModule {}

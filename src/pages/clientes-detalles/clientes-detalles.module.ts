import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientesDetallesPage } from './clientes-detalles';

@NgModule({
  declarations: [
    ClientesDetallesPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientesDetallesPage),
  ],
})
export class ClientesDetallesPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioCrearPage } from './usuario-crear';

@NgModule({
  declarations: [
    UsuarioCrearPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioCrearPage),
  ],
})
export class UsuarioCrearPageModule {}

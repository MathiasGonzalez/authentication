import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleItemPage } from './detalle-item';

@NgModule({
  declarations: [
    DetalleItemPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleItemPage),
  ],
  exports: [
    DetalleItemPage
  ]
})
export class DetalleItemPageModule {}

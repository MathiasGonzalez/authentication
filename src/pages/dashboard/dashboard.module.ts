import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dashboard } from './dashboard';
import { SampleModalPageModule } from "../sample-modal/sample-modal.module";

@NgModule({
  declarations: [
    Dashboard,
  ],
  imports: [
    IonicPageModule.forChild(Dashboard),
    SampleModalPageModule
  ],
  exports: [
    Dashboard
  ]
})
export class DashboardModule {}

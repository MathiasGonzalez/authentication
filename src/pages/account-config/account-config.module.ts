import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountConfigPage } from './account-config';

@NgModule({
  declarations: [
    AccountConfigPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountConfigPage),
  ],
  exports: [
    AccountConfigPage
  ]
})
export class AccountConfigPageModule {}

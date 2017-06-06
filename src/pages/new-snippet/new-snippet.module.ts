import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSnippetPage } from './new-snippet';

@NgModule({
  declarations: [
    NewSnippetPage,
  ],
  imports: [
    IonicPageModule.forChild(NewSnippetPage),
  ],
  exports: [
    NewSnippetPage
  ]
})
export class NewSnippetPageModule {}

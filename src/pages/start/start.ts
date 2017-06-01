import { BasePage } from '../basePage';
import { UserLogin } from '../user-login/user-login';
import { AppModule } from '../../app/app.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage extends BasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super(navCtrl, navParams);   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');    
  }

}

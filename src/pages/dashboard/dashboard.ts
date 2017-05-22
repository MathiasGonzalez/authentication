import { BasePage } from '../basePage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard extends BasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super(navCtrl, navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dashboard');
  }

  ionViewCanEnter(): boolean {
    return true;
  }

}

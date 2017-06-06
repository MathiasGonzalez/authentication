import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SampleModalPage } from "../sample-modal/sample-modal";
import { AccountConfigPage } from "../account-config/account-config";
import { AboutPage } from "../about/about";

/**
 * Generated class for the ConfigPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  tab1Root = AccountConfigPage;

  tab2Root = AboutPage;

  tab3Root = SampleModalPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

}

import { BasePage } from '../basePage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';
import { UserSignup } from '../user-signup/user-signup';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';

@IonicPage()
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLogin extends BasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super(navCtrl,navParams)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLogin');
  }

  dashboardPage(){ this.navCtrl.push(Dashboard); }
  signupPage(){ this.navCtrl.push(UserSignup); }
  forgotPasswordPage(){ this.navCtrl.push(UserForgotpassword); }

}

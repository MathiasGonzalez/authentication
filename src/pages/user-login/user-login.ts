import { BasePage } from '../basePage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';
import { UserSignup } from '../user-signup/user-signup';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Authorization } from "../../services/authorization";

@IonicPage()
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLogin extends BasePage {

  protected items: FirebaseListObservable<any[]>;
 
  get showlogin(): boolean {
    return !!this.authorization && this.authorization.currentUser === null;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super(navCtrl, navParams)
    //this.items = db.list('/items')    
  }

  signInWithFacebook(): void {
    this.authorization.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    console.log("Facebook display name ", this.authorization.displayName());
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLogin');
  }

  dashboardPage() { this.navCtrl.push(Dashboard); }
  signupPage() { this.navCtrl.push(UserSignup); }
  forgotPasswordPage() { this.navCtrl.push(UserForgotpassword); }

  public loginWithGoogle() {
    this.authorization.loginGoogle()
    // .then(() => this.onSignInSuccess());
  }
  loginWithFacebook() {
    this.signInWithFacebook();
  }
}

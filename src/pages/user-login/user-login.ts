import { BasePage } from '../basePage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';
import { UserSignup } from '../user-signup/user-signup';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Authorization } from "../../services/authorization";
import { LogInIn, User, LoginClient, LogInOut } from "../../generated/proxy";
import { AppModule } from "../../app/app.module";

@IonicPage()
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLogin extends BasePage {

  protected items: FirebaseListObservable<any[]>;

  currentUser: User = new User();

  get showlogin(): boolean {
    return !!this.authorization && this.authorization.currentUser === null;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginClient: LoginClient, ) {
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

  public loginWithGoogle() {
    this.authorization.signInWithGoogle()
    // .then(() => this.onSignInSuccess());
  }

  loginWithFacebook() {
    this.signInWithFacebook();
  }

  //login normal
  protected login(): void {
    if (this.checkData()) {
      let input: LogInIn = new LogInIn();
      if (this.validateEmail(this.currentUser.userName)) {
        this.currentUser.email = this.currentUser.userName;
      }
      input.user = this.currentUser;
      input.fireBaseForce = false;
      this.loginClient.logIn(input).subscribe(this.processlogin.bind(this));
    }
  }

  protected checkData(): boolean {
    return !!this.currentUser && !!this.currentUser.password;
  }

  protected processlogin(output: LogInOut): void {
    if (output.result === "OK") {
      AppModule.currentUser = output.user;
      this.authorization.signInWithEmailAndPassword(output.user.email, this.currentUser.password);
    } else if (output.result === "NULLDATA") {
      this.showAlert("Error", "Información incorrecta:" + output.result);
    } else if (output.result === "FAIL") {
      this.showAlert("Error", "Usuario incorrecto:" + output.result);
    }
  }

  get showSocialLogin(): boolean {
    return !this.currentUser || !this.currentUser.userName || this.currentUser.userName === '';
  }


  dashboardPage() { this.navCtrl.push(Dashboard); }
  signupPage() { this.navCtrl.push(UserSignup); }
  forgotPasswordPage() { this.navCtrl.push(UserForgotpassword); }

}

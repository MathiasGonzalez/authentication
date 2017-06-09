import { BasePage } from '../basePage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, AlertOptions } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';
import { UserLogin } from '../user-login/user-login';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';
import { LoginClient, SignUpIn, SignUpOut, User } from "../../generated/proxy";
import { AppModule } from "../../app/app.module";

@IonicPage()
@Component({
  selector: 'page-user-signup',
  templateUrl: 'user-signup.html',
})
export class UserSignup extends BasePage {

  protected newUser: User = new User();

  protected passwordConfirmation: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginClient: LoginClient) {
    super(navCtrl, navParams);
  }

  public signUp(): void {
    let input: SignUpIn = new SignUpIn();
    input.user = this.newUser;
    // alert(JSON.stringify(input))
    if (this.checkData()) {
      this.loginClient.signUp(input).subscribe(this.processSignUp.bind(this));
    }
  }

  protected processSignUp(output: SignUpOut): void {
    if (output.result === "YA EXISTE") {
      this.showAlert("Usuario Existente", "Ya existe un usuario con ese nombre ó email.");
    } else {
      AppModule.currentUser = output.user;
      this.authorization
        .afAuth
        .auth
        .createUserWithEmailAndPassword(this.newUser.email, this.newUser.password).then((val => {
          //al crear el usuario en firebase loguearse
          this.authorization.signInWithEmailAndPassword(this.newUser.email, this.newUser.password)
        }).bind(this)).catch((error => {
          this.showAlert(error.name, error.message);          
          this.navCtrl.setRoot(Dashboard);
        }).bind(this));
    }
  }

  protected checkData(): boolean {
    if (!this.checkPassword()) {
      return false;
    }
    if (this.newUser.email == null || this.newUser.email === "") {
      this.showAlert("Información invalida", "Ingrese un  email.");
      return false;
    }
    if (!this.validateEmail(this.newUser.email)) {
      this.showAlert("Información invalida", "Ingrese un email valido .");
      return false;
    }
    if (!this.newUser.userName) {
      this.showAlert("Información invalida", "Ingrese una  nombre de usuario .");
      return false;
    }
    return true;
  }

  protected checkPassword(): boolean {
    if (!this.newUser.password) {
      this.showAlert("Información invalida", "Ingrese una  contraseña .");
      return false;
    }
    if (this.passwordConfirmation !== this.newUser.password) {
      this.showAlert("Información invalida", "La contraseña y su confirmación no coinciden.");
      return false;
    }
    return true;
  }

  public loginWithGoogle() {
    this.authorization.signInWithGoogle();
  }



  dashboardPage() { this.navCtrl.push(Dashboard); }
  loginPage() { this.navCtrl.push(UserLogin); }
  forgotPasswordPage() { this.navCtrl.push(UserForgotpassword); }



}

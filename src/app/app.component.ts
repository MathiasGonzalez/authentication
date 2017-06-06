import { RealTimeDB } from '../providers/realTimeDB';

import { EventEmitter } from '@angular/core/core';
import { AppModule } from './app.module';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, ModalController } from 'ionic-angular';

import { UserLogin } from '../pages/user-login/user-login';
import { Dashboard } from '../pages/dashboard/dashboard';
import { SampleModalPage } from '../pages/sample-modal/sample-modal';

import * as firebase from 'firebase/app';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Authorization } from "../providers/authorization";
import { LoginClient, LogInIn, User, LogInOut } from "../generated/proxy";
import { ConfigPage } from "../pages/config/config";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = UserLogin;



  pages: Array<{ title: string, icon: string, component: any }>;

  currentUser: firebase.User = null;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public modalController: ModalController,
    protected authorization: Authorization,
    public loginClient: LoginClient,
    protected realTimeDB: RealTimeDB
  ) {
    this.initializeApp();
    //firebase detecto una session viva authorization.currentUser esta seteado
    authorization.success.subscribe(((user: firebase.User) => {
      if (this.currentUser == null && !!user) {
        this.login(user);
      }
      this.currentUser = user;
      console.log("USER:>", this.currentUser);
    }).bind(this), ((error: any) => {
      this.logOut();
    }).bind(this));
    // set our app's pages
    this.pages = [
      { title: 'Dashbaord', icon: 'home', component: Dashboard },
      { title: 'Confif', icon: 'settings', component: ConfigPage },
      { title: 'Logout', icon: 'lock', component: UserLogin }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    //detarminar si se esta dentro de un Browser
    if (this.platform.is("core") || this.platform.is("mobileweb")) {
      AppModule.isWeb = true;
    } else {
      AppModule.isWeb = false;
    }
  }

  protected login(currentUser: firebase.User): void {
    let input: LogInIn = new LogInIn();
    input.user = new User();
    input.user.email = currentUser.email;
    input.user.userName = currentUser.displayName;
    input.user.uid = currentUser.uid;
    //provocara un sign in
    input.fireBaseForce = true;
    this.loginClient.logIn(input).subscribe(this.processlogin.bind(this));
  }

  protected processlogin(output: LogInOut): void {
    AppModule.user = output.user;
    this.nav.setRoot(Dashboard);
  }

  protected logOut(): void {
    //cerrar todas las conexiones
    this.realTimeDB.db.database.goOffline();
    //desloguearse
    this.authorization.signOut();
    this.authorization.currentUser = undefined;
    this.currentUser = null;
    //volver al login
    this.nav.setRoot(UserLogin);

  }



  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    if (page.title !== "Logout") {
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
    } else {
      //mostrar modal de confirmacion
      this.mostrarModalConfirmacion();
    }
  }
  mostrarModalConfirmacion() {
    let profileModal = this.modalController.create(SampleModalPage);
    profileModal.onDidDismiss(data => {
      if (data.logout) {
        this.logOut();
      }
    });
    profileModal.present();
  }




  settingsSlide() {
    // let profileModal = this.modalController.create();
    // profileModal.present();
  }
}


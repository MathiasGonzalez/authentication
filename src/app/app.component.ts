import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, ModalController } from 'ionic-angular';

import { UserLogin } from '../pages/user-login/user-login';
import { Dashboard } from '../pages/dashboard/dashboard';
import { SampleModalPage } from '../pages/sample-modal/sample-modal';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = UserLogin;
  pages: Array<{ title: string, icon: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public modalController: ModalController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dashbaord', icon: 'home', component: Dashboard },
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
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    if (page.title !== "Logout") {
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
    } else {
      this.mostrarModalConfirmacion();
    }
  }
  mostrarModalConfirmacion() {
    let profileModal = this.modalController.create(SampleModalPage);
    profileModal.onDidDismiss(data => {
      if (data.logout) {
        this.nav.setRoot(UserLogin);
      }
    });
    profileModal.present();

  }
}


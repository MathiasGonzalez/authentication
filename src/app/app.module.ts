import { DetalleItemPageModule } from '../pages/detalle-item/detalle-item.module';
import { SampleModalPageModule } from '../pages/sample-modal/sample-modal.module';
import { StartPageModule } from '../pages/start/start.module';
import { UserForgotpasswordModule } from '../pages/user-forgotpassword/user-forgotpassword.module';
import { UserSignupModule } from '../pages/user-signup/user-signup.module';
import { UserLoginModule } from '../pages/user-login/user-login.module';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injector, EventEmitter } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { UserLogin } from '../pages/user-login/user-login';
import { UserSignup } from '../pages/user-signup/user-signup';
import { UserForgotpassword } from '../pages/user-forgotpassword/user-forgotpassword';
import { Dashboard } from '../pages/dashboard/dashboard';
import { SampleModalPage } from '../pages/sample-modal/sample-modal';
import { DetalleItemPage } from '../pages/detalle-item/detalle-item';
import { StartPage } from '../pages/start/start';

// import { UserLoginModule } from '../pages/user-login/user-login.module';
// import { UserSignupModule } from '../pages/user-signup/user-signup.module';
// import { UserForgotpasswordModule } from '../pages/user-forgotpassword/user-forgotpassword.module';
// import { DashboardModule } from '../pages/dashboard/dashboard.module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Authorization } from "../providers/authorization";
import { RealTimeDB } from "../providers/realTimeDB";

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from "angularfire2/auth";


// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDuy5jk8x11qbqEiAGnl0vBbkqj5_mijfc",
  authDomain: "inclever-aba25.firebaseapp.com",
  databaseURL: "https://inclever-aba25.firebaseio.com",
  projectId: "inclever-aba25",
  storageBucket: "inclever-aba25.appspot.com",
  messagingSenderId: "384291278072"
};


@NgModule({
  declarations: [
    MyApp,
    // SampleModalPage,
    // UserLogin,
    // UserSignup,
    // UserForgotpassword,
    // Dashboard,
    // DetalleItemPage,
    // StartPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    DashboardModule,
    UserLoginModule,
    UserSignupModule,
    UserForgotpasswordModule,
    StartPageModule,SampleModalPageModule,
    DetalleItemPageModule     
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SampleModalPage,
    UserLogin,
    UserSignup,
    UserForgotpassword,
    Dashboard,
    StartPage,
    DetalleItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuth,
    AngularFireDatabase,
    Authorization,
    RealTimeDB
  ]
})
export class AppModule {



  static injector: Injector;

  static isWeb: boolean;

  constructor(injector: Injector) {
    AppModule.injector = injector;
  }


}

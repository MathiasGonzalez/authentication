import { DetalleItemPageModule } from '../pages/detalle-item/detalle-item.module';
import { SampleModalPageModule } from '../pages/sample-modal/sample-modal.module';

import { UserForgotpasswordModule } from '../pages/user-forgotpassword/user-forgotpassword.module';
import { UserSignupModule } from '../pages/user-signup/user-signup.module';
import { UserLoginModule } from '../pages/user-login/user-login.module';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injector, EventEmitter } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { UserLogin } from '../pages/user-login/user-login';
import { UserSignup } from '../pages/user-signup/user-signup';
import { UserForgotpassword } from '../pages/user-forgotpassword/user-forgotpassword';
import { Dashboard } from '../pages/dashboard/dashboard';
import { SampleModalPage } from '../pages/sample-modal/sample-modal';
import { DetalleItemPage } from '../pages/detalle-item/detalle-item';


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
import { LoginClient, User, SnippetsClient } from "../generated/proxy";
import { ConfigPageModule } from "../pages/config/config.module";
import { AboutPageModule } from "../pages/about/about.module";
import { AccountConfigPageModule } from "../pages/account-config/account-config.module";
import { NewSnippetPageModule } from "../pages/new-snippet/new-snippet.module";


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
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    DashboardModule,
    UserLoginModule,
    UserSignupModule,
    UserForgotpasswordModule,
    SampleModalPageModule,
    DetalleItemPageModule,
    ConfigPageModule,
    AboutPageModule,
    AccountConfigPageModule,
    NewSnippetPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SampleModalPage,
    UserLogin,
    UserSignup,
    UserForgotpassword,
    Dashboard,
    DetalleItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuth,
    AngularFireDatabase,
    Authorization,
    RealTimeDB,
    LoginClient,
    SnippetsClient,
  ]
})
export class AppModule {



  public static injector: Injector;
  public static isWeb: boolean;
  public static user: User;

  constructor(injector: Injector) {
    AppModule.injector = injector;
  }


}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
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
import { PageAuthorization } from "../services/pageAuthorization";

@NgModule({
  declarations: [
    MyApp,
    SampleModalPage,
    UserLogin,
    UserSignup,
    UserForgotpassword,
    Dashboard,
    DetalleItemPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    // UserLoginModule,
    // UserSignupModule,
    // UserForgotpasswordModule,
    // DashboardModule
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
    PageAuthorization
  ]
})
export class AppModule {

  constructor() { 
    
  }


}

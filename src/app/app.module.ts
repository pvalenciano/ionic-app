import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {
  MenuPage,
  AboutPage,
  ContactPage,
  HomePage,
  TabsPage,
  Pg1Page,

} from '../pages/index';
// import { LoginPage } from '../pages/login/login';
import {
  LoginPageModule
} from '../pages/login/login.module';
import {
  HomePageModule
} from '../pages/home/home.module';

@NgModule({
  declarations: [
    //dont forget to import here the components!!!
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    Pg1Page,

    MenuPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // ComponentsModule
    LoginPageModule,
    HomePageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    //and here!!

    Pg1Page,
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

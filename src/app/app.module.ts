import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2/';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { EmailComposer } from '@ionic-native/email-composer';

import { MyApp } from './app.component';
import {
  MenuPage,
  AboutPage,
  ContactPage,
  TabsPage,
  Pg1Page,

} from '../pages/index';

import { UserPageModule, RegisterPageModule, LoginPageModule, HomePageModule } from '../pages/modules';
import { SongsService } from '../services/song.service';
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
    LoginPageModule,
    HomePageModule,
    UserPageModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RegisterPageModule,
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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuth,
    EmailComposer,
    SongsService
  ]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage, HomePage, MenuPage } from '../pages';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserProvider } from '../providers/user/user';
import { ContainerPage } from '../pages/container/container';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = ContainerPage;
  // rootPage: any;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private angularFireAuth: AngularFireAuth,
    private userProvider: UserProvider
  ) {

    // this.userProvider.getAuth().subscribe(auth => {
    //   if (auth) {
    //     console.log("logueado");
    //     this.rootPage = MenuPage;
    //   } else {
    //     console.log("no logueado");
    //     this.rootPage = 'Login';
    //   }
    // })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });


  }


}

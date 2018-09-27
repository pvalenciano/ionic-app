import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';



/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// export interface PageInface {
//   title: string;s
//   pageName: string;
//   tabComponent?: any;
//   index?: number;
//   icon: string;
// }


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})

export class MenuPage {
  public rootPage: string = 'Home';


  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: string, openTab?: any, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireAuth: AngularFireAuth) {
    console.log("USER STATE FROM MENU :", this.angularFireAuth.authState);

    this.angularFireAuth.auth.onAuthStateChanged(function (user) {
      console.log("USER  :", user);

      if (user) {
        this.rootPage = 'User';
      } else {
        this.rootPage = 'Home'
      }
    });

    this.pages = [
      // { title: 'Home', component: 'Home', openTab: 1, icon: 'home' },
      
      { title: 'Login', component: 'Login', openTab: 2, icon: 'md-log-in' },
      { title: 'Notes', component: 'Notes', openTab: 3, icon: 'ios-bookmarks' },
      { title: 'Components', component: 'Components', openTab: 4, icon: 'md-bulb' },
      { title: 'Profile', component: 'Profile', openTab: 5, icon: 'person' },


    ];


  }
  ngOnInit() {
    // this.nav.push(this.rootPage)
  }
  openPage(page) {
    this.nav.setRoot(page.component, { openTab: page.openTab });
    // this.nav.push(page.component, { openTab: page.openTab })
  }


  // openPage(page: PageInface): void {

  // }
  // isActive(page: PageInface): void {

  // }

}

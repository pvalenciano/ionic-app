import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
// import { Pg2Page } from '../pg2/pg2';
// import { Pg1Page } from '../pg1/pg1';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// export interface PageInface {
//   title: string;
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
  rootPage = HomePage;


  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: string, openTab?: any, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Home', component: 'Home', openTab: 1, icon: 'home' },
      { title: 'Login', component: 'Login', openTab: 2, icon: 'md-log-in' },
      { title: 'Notes', component: 'Notes', openTab: 3, icon: 'ios-bookmarks' },
      { title: 'Components', component: 'Components', openTab: 4, icon: 'md-bulb' },

    ]
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

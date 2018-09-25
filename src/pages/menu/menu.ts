import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';

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
  pages: Array<{ title: string, component: string, openTab?: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Home', component: 'HomeComponent' }
    ]
  }
  openPage(page) {
    this.nav.setRoot(page.component, { openTab: page.openTab });
  }

  // openPage(page: PageInface): void {

  // }
  // isActive(page: PageInface): void {

  // }

}

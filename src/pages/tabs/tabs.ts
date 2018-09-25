import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MenuPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  myIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}

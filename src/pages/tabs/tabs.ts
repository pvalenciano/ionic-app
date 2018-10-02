import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { NewsPage } from '../news/news';
import { QrPage } from '../qr/qr';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MenuPage;
  tab2Root = NewsPage;
  tab3Root = QrPage;


  myIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
}

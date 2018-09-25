import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pg1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//to navigate with urls

@Component({
  selector: 'page-pg1',
  templateUrl: 'pg1.html',
})
export class Pg1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pg1Page');
  }

  goBackFromPg1(): void {
    this.navCtrl.pop();
  }
}

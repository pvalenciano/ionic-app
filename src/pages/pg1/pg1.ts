import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pg1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//to navigate with urls
@IonicPage({ name: 'pagina1', segment: 'pagina-1/:param' })
@Component({
  selector: 'page-pg1',
  templateUrl: 'pg1.html',
})
export class Pg1Page {

  greeting: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.greeting = this.navParams.get('param');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pg1Page');
  }

  goBackFromPg1(): void {
    this.navCtrl.pop();
  }
}

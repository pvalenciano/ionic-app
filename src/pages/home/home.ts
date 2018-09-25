import { Component } from '@angular/core';
import { Pg2Page } from '../pg2/pg2';
import { MenuController, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController, menu: MenuController, public navParams: NavParams) {

  }

  goPg2(): void {
    this.navCtrl.push(Pg2Page);
  }
  goPg1URL(): void {
    this.navCtrl.push('pagina1', { param: 'Hola desde Home' });
  }
}

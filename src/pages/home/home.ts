import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pg2Page } from '../pg2/pg2';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goPg2(): void {
    this.navCtrl.push(Pg2Page);
  }
}

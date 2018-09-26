import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'Home' })
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFireAuth: AngularFireAuth) {
    console.log("USER STATE: ", this.angularFireAuth.authState);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  logout(): void {
    this.angularFireAuth.auth.signOut();

  }

}

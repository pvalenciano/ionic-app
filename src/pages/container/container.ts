import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserProvider } from '../../providers/user/user';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the ContainerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-container',
  templateUrl: 'container.html',
})
export class ContainerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private angularFireAuth: AngularFireAuth,
    private userProvider: UserProvider) {

    this.userProvider.getAuth().subscribe(auth => {
      if (auth) {
        console.log("logueado");
        this.navCtrl.setRoot(MenuPage);
        // this.rootPage = MenuPage;
      } else {
        console.log("no logueado");
        // this.rootPage = 'Login';
        this.navCtrl.setRoot('Login');

      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContainerPage');
  }

}

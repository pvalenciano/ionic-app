import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
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
  rootPage: any = MenuPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireAuth: AngularFireAuth,
    private userProvider: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContainerPage');
  }

}

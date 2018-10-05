import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import {
  NewsPage
} from '../index';
import { UserProvider } from '../../providers/user/user';
import { MusicPage } from '../music-pages/music/music';
import { NotesPage } from '../notes-pages/notes/notes';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage({ name: 'Home' })
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public angularFireAuth: AngularFireAuth,
    private usProvider: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  navigate(option) {

    switch (option) {
      case 1:
        this.navCtrl.setRoot(MusicPage);
        break;
      case 2:
        this.navCtrl.setRoot(NotesPage);
        break;
      case 3:
        this.navCtrl.setRoot(NewsPage);
        break;
    }
  }
}

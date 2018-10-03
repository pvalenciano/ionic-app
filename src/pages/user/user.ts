import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';

import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import {
  NewsPage
} from '../index';


@IonicPage({ name: 'User' })
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  // pushComponent = {
  //   pushToMusic: "Music",
  //   pushToNotes: "Notes",
  //   pushToNews: NewsPage
  // }


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  ) {

  }
  // navigate(option) {

  //   switch (option) {
  //     case 1:
  //       this.navCtrl.setRoot('Music');
  //       break;
  //     case 2:
  //       this.navCtrl.setRoot('Notes');
  //       break;
  //     case 3:
  //       this.navCtrl.setRoot('News');
  //       break;
  //   }
  // }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'Profile'})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


  constructor(
    navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth) {
    //   var user = firebase.auth().currentUser;

    // console.log("user: ", user);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}

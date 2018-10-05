import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile.model';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'Register' })
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  profile = {} as Profile;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(email, password): void {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(this.profile.email, password).then((res) => {
      this.angularFireAuth.authState.take(1).subscribe(auth => {
        this.afDatabase.list(`profile/${auth.uid}`).push(this.profile)
          // .then(() => this.navCtrl.push('Home'))
          // .then(() => this.navCtrl.setRoot('Login'))

      })
      
      // this.navCtrl.setRoot('Login', { email });
    });


  }
}

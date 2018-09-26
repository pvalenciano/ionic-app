import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'Login' })
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public angularFireAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  backToHome() {
    this.navCtrl.setRoot('Home');
  }
  login(email, password): void {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then((res) => {
      this.navCtrl.setRoot('User', { email })
    });
  }
  onRegisterClicked(): void {
    this.navCtrl.setRoot('Register');
  }
}

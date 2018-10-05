import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage({ name: 'Profile' })
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile = {} as Profile;
  // userDataList$: Observable<Profile[]>;
  userDataList$: any;
  public currentUser = this.angularFireAuth.auth.currentUser;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public afDatabase: AngularFireDatabase,
    private userProvider: UserProvider) {

  }


  ionViewWillLoad() {
    // console.log('ionViewDidLoad ProfilePage');  
    // return this.angularFireAuth.afDatabase().ref('/profile/'+ userId).then(function(snapshot){
    //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // })

    console.log("currentUser: ", this.currentUser);
  }
  createProfile() {
    this.angularFireAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.list(`profile/${auth.uid}`).push(this.profile)
        .then(() => this.navCtrl.push('Home'))
    })
  }
}

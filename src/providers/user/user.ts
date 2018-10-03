import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Profile } from '../../models/profile.model';
import { AngularFireAuth } from 'angularfire2/auth';



@Injectable()
export class UserProvider {

  userList: AngularFireList<any>;


  // private userDataRef = this.angularFireAuth.authState.take(1).subscribe(auth => {
  //   this.db.list<Profile>(`profile/${auth.uid}`)
  // });
  private x = this.db.list('profile');
  profile = {} as Profile;

  public currentUser = this.angularFireAuth.auth.currentUser;

  // user = {
  //   email: this.currentUser.email,
  //   photoUrl: this.currentUser.photoURL,
  //   name: this.currentUser.displayName,
  //   phone: this.currentUser.phoneNumber,
  //   lastSign: this.currentUser.metadata.lastSignInTime
  // }

  constructor(public http: HttpClient, 
    private db: AngularFireDatabase, 
    public angularFireAuth: AngularFireAuth) {
  }

  getUserData() {
      this.userList = this.db.list<Profile>('profile');
      return this.userList;
  }
  editUserData() {

  }
  public getAuth() {
    return this.angularFireAuth.authState.map(
      auth => auth);
  }
}

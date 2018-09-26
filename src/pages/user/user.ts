import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SongsService } from '../../services/song.service';
import { Observable } from 'rxjs/Observable';
import { Song } from '../../models/song.model';
import { Band } from '../../models/band.model';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'User' })
@Component({
  selector: '',
  templateUrl: 'user.html',
})
export class UserPage {

  songsList$: Observable<Song[]>;
  bandList$: Observable<Band[]>;

  band: Band = {
    name: ''
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    private songService: SongsService) {
    this.songsList$ = this.songService.getSongsList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
    // console.log("user from user:", this.angularFireAuth.auth.currentUser);

  }

  ionViewWillLoad() {
    this.bandList$ = this.songService.getBandList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }
  onContextChange(ctxt: string) {
    this.songsList$ = this.songService.assembleBandFilteredList(ctxt).snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  showAllSongs(){
    this.songsList$ = this.songService.getSongsList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }
  logout(): void {
    this.angularFireAuth.auth.signOut();

  }
}

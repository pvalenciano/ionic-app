import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsService } from '../../services/song.service';
import { Observable } from 'rxjs/Observable';
import { Song } from '../../models/song.model';
import { Band } from '../../models/band.model';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
/**
 * Generated class for the MusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'Music' })
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {
  songsList$: Observable<Song[]>;
  bandsList$: Observable<Band[]>;

  band: Band = {
    name: ''
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private songsService: SongsService) {

    this.songsList$ = this.songsService.getSongsList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
    // console.log("user from user:", this.angularFireAuth.auth.currentUser);

  }
  ionViewWillLoad() {
    this.bandsList$ = this.songsService.getBandList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  onContextChange(ctxt: string): void {
    console.log('ctxt', ctxt);

    this.songsList$ = this.songsService.assembleBandFilteredList(ctxt).snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }


  // onContextChange(event) {
  //   console.log('ctxt', event);

  // }
  showAllSongs() {
    this.songsList$ = this.songsService.getSongsList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }
  // logout(): void {
  //   this.angularFireAuth.auth.signOut();

  // }
}

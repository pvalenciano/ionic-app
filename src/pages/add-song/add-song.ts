import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song.model';
import { SongsService } from '../../services/song.service';
import { Band } from '../../models/band.model';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AddSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-song',
  templateUrl: 'add-song.html',
})
export class AddSongPage {
  bandsList$: Observable<Band[]>;

  song: Song = {
    title: '',
    // chords: '',
    lyrics: '',
    band: ''
  }
  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
    public songs: SongsService) {
  }
  ionViewWillLoad() {
    this.bandsList$ = this.songs.getBandList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSongPage');
  }
  addSong(song: Song) {
    this.songs.addSong(song).then(ref => {
      this.navCtrl.setRoot('Music', { key: ref.key })
    });
  }

}

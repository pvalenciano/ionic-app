import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongProvider } from '../../../providers/song/song';
import { BandProvider } from '../../../providers/band/band';
import { Song } from '../../../models/song.model';
import { Band } from '../../../models/band.model';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the EditSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-song',
  templateUrl: 'edit-song.html',
})
export class EditSongPage {
  bandsList$: Observable<Band[]>;
  
  song: Song;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private songs: SongProvider,
    private bands: BandProvider
    ) {
    console.log("bandas: ", this.bandsList$);
  }

  ionViewWillLoad() {
    this.bandsList$ = this.bands.getBandList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
    this.song = this.navParams.get('song');
  }
  saveSong(song: Song) {
    this.songs.editSong(song).then(() => {
      this.navCtrl.setRoot('Music');
    });
  }


}

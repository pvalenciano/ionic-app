import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../../models/song.model';
import { SongProvider } from '../../../providers/song/song';
import { Band } from '../../../models/band.model';
import { Observable } from 'rxjs/Observable';
import { BandProvider } from '../../../providers/band/band';
/**
 * Generated class for the AddSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-add-song',
  templateUrl: 'add-song.html',
})
export class AddSongPage {
  bandsList$: Observable<Band[]>;
  @ViewChild('myInput') myInput: ElementRef;

  song: Song = {
    title: '',
    // chords: '',
    lyrics: '',
    band: ''
  }
  constructor(
    public navCtrl: NavController,
    navParams: NavParams,
    public songs: SongProvider,
    public bands: BandProvider
    ) {
  }
  ionViewWillLoad() {
    this.bandsList$ = this.bands.getBandList().snapshotChanges().map(changes => {
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
  resize() {
    // this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';

  }
}

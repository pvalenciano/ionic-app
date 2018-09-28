import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song.model';
import { SongProvider } from '../../providers/song/song';
9
/**
 * Generated class for the ViewSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-song',
  templateUrl: 'view-song.html',
})
export class ViewSongPage {
  song: Song;

  songState: string = "lyrics";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private songs: SongProvider) {

  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad ViewSongPage');
    this.song = this.navParams.get('song');
    console.log("song params: ", this.song);
  }

}

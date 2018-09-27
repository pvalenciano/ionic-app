import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song.model';
import { SongsService } from '../../services/song.service';
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
  //  = {
  //   key:'',
  //   title:'',
  //   chords: '',
  //   lyrics: '',
  //   band:''


  // }
  songState: string = "lyrics";

  constructor(public navCtrl: NavController, public navParams: NavParams, private songs: SongsService) {

  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad ViewSongPage');
    this.song = this.navParams.get('song');
    console.log("song params: ", this.song);
  }

}

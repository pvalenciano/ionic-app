import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsService } from '../../services/song.service';
import { Observable } from 'rxjs/Observable';
import { Song } from '../../models/song.model';
import { Band } from '../../models/band.model';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { AlertController } from 'ionic-angular';
import { ViewSongPage } from '../view-song/view-song';

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
  edit: boolean = false;

  goToView = 'ViewSongPage';
  band: Band = {
    name: ''
  }
  //searchbar
  myInput: '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private songsService: SongsService,
    public alertCtrl: AlertController) {

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
  onEdit(e) {
    console.log("e: ", e.checked);
    this.edit = e.checked;
  }
  deleteSong(song: Song) {
    this.goToView = null;

    const confirm = this.alertCtrl.create({
      title: ' Delete',
      message: ' Do you want to delete: ' + song.title + ' ?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree!');
            this.songsService.removeSong(song).then(() => {
              this.navCtrl.setRoot('Music')
            });
          }
        }
      ]
    });
    confirm.present();

  }

  showAllSongs() {
    this.songsList$ = this.songsService.getSongsList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  //Searchbar methods
  onInput(e) {
  }
  onCancel(e) {
  }
  //logout from firebase
  logout(): void {
    console.log("i will sign out soon...")
    // this.angularFireAuth.auth.signOut();

  }
}

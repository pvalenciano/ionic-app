import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Song } from '../../models/song.model';
import { Band } from '../../models/band.model';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { AlertController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { SongProvider } from '../../providers/song/song';
import { BandProvider } from '../../providers/band/band';
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
    public alertCtrl: AlertController,
    private emailComposer: EmailComposer,
    public songsProvider: SongProvider,
    public bandProvider: BandProvider
    ) {

    this.songsList$ = this.songsProvider.getSongsList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
    // console.log("user from user:", this.angularFireAuth.auth.currentUser);

  }
  ionViewWillLoad() {
    this.bandsList$ = this.bandProvider.getBandList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  onContextChange(ctxt: string): void {
    console.log('ctxt', ctxt);

    this.songsList$ = this.songsProvider.assembleBandFilteredList(ctxt).snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }
  onEdit(e) {
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
            this.songsProvider.removeSong(song).then(() => {
              this.navCtrl.setRoot('Music')
            });
          }
        }
      ]
    });
    confirm.present();

  }

  showAllSongs() {
    this.songsList$ = this.songsProvider.getSongsList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }
  sendEmail() {
    let email = {
      to: '',
      cc: '',
      attachments: [

      ],
      subject: 'Join the band and see instan lyrics updates',
      body: 'Check put the app on the appstore or googleplay',
      isHtml: true
    };
    this.emailComposer.open(email);
    console.log("email? : ", this.emailComposer.open(email));
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

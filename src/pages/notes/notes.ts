import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Notes } from '../../models/notes.model';
import { NoteProvider } from '../../providers/note/note';
import { Observable } from 'rxjs';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'Notes' })
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  notesList$: Observable<Notes[]>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private notesProv: NoteProvider,
    public alertCtrl: AlertController,
  ) {
  }

  ionViewWillLoad() {
    this.notesList$ = this.notesProv.getNotesList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  deleteNote(note: Notes) {

    console.log("delte pulsed");
    const confirm = this.alertCtrl.create({
      title: ' Delete',
      message: ' Do you want to delete: ' + note.title + ' ?',
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
            this.notesProv.removeNote(note);

          }
        }
      ]
    });
    confirm.present();
  }
}

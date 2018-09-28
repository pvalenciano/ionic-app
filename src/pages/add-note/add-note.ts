import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Note } from 'ionic-angular';
import { Notes } from '../../models/notes.model';
import { NoteProvider } from '../../providers/note/note';
/**
 * Generated class for the AddNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {
  note: Notes = {
    date: '',
    title: '',
    note: '',
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private noteProv: NoteProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotePage');
  }

  addNote(note: Notes) {
    this.noteProv.addNote(note).then(ref =>{
      this.navCtrl.setRoot('Notes', { key: ref.key})
    });
  }
}

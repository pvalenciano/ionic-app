import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteProvider } from '../../../providers/note/note';
import { Notes } from '../../../models/notes.model';
/**
 * Generated class for the EditNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-note',
  templateUrl: 'edit-note.html',
})
export class EditNotePage {
  note: Notes={
    title:'',
    date:null,
    note:''
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private noteProv: NoteProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditNotePage');
    this.note = this.navParams.get('note');
  }
  editNote(note: Notes) {
    this.noteProv.editNote(note).then(()=>{
      this.navCtrl.setRoot('Notes');
    })
  }
}

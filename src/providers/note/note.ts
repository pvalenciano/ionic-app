import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Notes } from '../../models/notes.model';
/*
  Generated class for the NoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoteProvider {

  private noteListRef = this.db.list<Notes>('notes-list');

  constructor(private db: AngularFireDatabase) {
    console.log('Hello NoteProvider Provider');
  }
  getNotesList() {
    return this.noteListRef;
  }
  addNote(note: Notes) {
    return this.noteListRef.push(note);
  }
  editNote(note: Notes) {
    return this.noteListRef.update(note.key, note);
  }
  removeNote(note: Notes) {
    return this.noteListRef.remove(note.key);
  }
}

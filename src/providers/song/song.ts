import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Song } from '../../models/song.model';

/*
  Generated class for the SongProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SongProvider {

  private songListRef = this.db.list<Song>('song-list');
  constructor(private db: AngularFireDatabase) { }

  getSongsList() {
    return this.songListRef;
  }
  filterByString(band: string) {
    return this.db.list('/song-list', ref => ref.orderByChild('band').equalTo(band));
  }

  assembleBandFilteredList(ctxt: string): any {
    return (this.filterByString(ctxt));
  }
  addSong(song: Song) {
    return this.songListRef.push(song);
  }
  editSong(song: Song) {
    return this.songListRef.update(song.key, song);
  }
  removeSong(song: Song) {
    return this.songListRef.remove(song.key);
  }


}

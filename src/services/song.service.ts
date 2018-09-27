import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Song } from '../models/song.model';
import { Band } from '../models/band.model';

@Injectable()
export class SongsService {

    private songListRef = this.db.list<Song>('song-list');
    private bandListRef = this.db.list<Band>('band-list');
    private band: Band = {
        name: ''
    }

    constructor(private db: AngularFireDatabase) { }

    //songs
    getSongsList() {
        return this.songListRef;
    }
    filterByString(band: string) {
        return this.db.list('/song-list', ref => ref.orderByChild('band').equalTo(band));
    }

    assembleBandFilteredList(ctxt: string): any {
        console.log("ctxt: ", ctxt);
        return (this.filterByString(ctxt));
    }
    addSong(song: Song) {
        return this.songListRef.push(song);
    }
    editSong(song: Song) {
        console.log("key: ", song.key);
        return this.songListRef.update(song.key, song);
    }
    removeSong(song: Song) {
        return this.songListRef.remove(song.key);
    }
    //bands
    getBandList() {
        return this.bandListRef;
    }

    addBand(band: Band) {
        return this.bandListRef.push(band);
    }

    removeBand(band: Band) {
        return this.bandListRef.remove(band.key);
    }

    editBand(band: Band) {
        console.log("key: ", band.key);
        return this.bandListRef.update(band.key, band);
    }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Band } from '../../models/band.model';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the BandProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BandProvider {
  private bandListRef = this.db.list<Band>('band-list');
  private band: Band = {
    name: ''
  }
  constructor(private db: AngularFireDatabase) {
    console.log('Hello BandProvider Provider');
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

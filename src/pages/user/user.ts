import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
// import { SongsService } from '../../services/song.service';
// import { Observable } from 'rxjs/Observable';
// import { Song } from '../../models/song.model';
// import { Band } from '../../models/band.model';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import {
  MusicPage,
  NotesPage,
  NewsPage
} from '../index';


@IonicPage({ name: 'User' })
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  pushComponent = {
    pushToMusic: MusicPage,
    pushToNotes: NotesPage,
    pushToNews: NewsPage
  }
 
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    // this.pushToMusic = MusicPage

  }
  
}

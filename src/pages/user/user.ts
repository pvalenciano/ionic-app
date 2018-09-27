import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { SongsService } from '../../services/song.service';
// import { Observable } from 'rxjs/Observable';
// import { Song } from '../../models/song.model';
// import { Band } from '../../models/band.model';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { MusicPage } from '../music/music';
// import { map } from 'rxjs/operators';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'User' })
@Component({
  selector: '',
  templateUrl: 'user.html',
})
export class UserPage {
  pushToMusic:any;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.pushToMusic = MusicPage

  }
  
}

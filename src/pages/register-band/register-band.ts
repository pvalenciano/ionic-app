import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsService } from '../../services/song.service';
import { Band } from '../../models/band.model';

/**
 * Generated class for the RegisterBandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-band',
  templateUrl: 'register-band.html',
})
export class RegisterBandPage {
  band: Band = {
    name: ''
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private regBand: SongsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBandPage');
  }
  addBand(band: Band) {
    this.regBand.addBand(band).then(ref => {
      this.navCtrl.setRoot('User', { key: ref.key })
    });
  }
}

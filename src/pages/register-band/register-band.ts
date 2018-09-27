import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsService } from '../../services/song.service';
import { Band } from '../../models/band.model';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterBandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'Bands' })
@Component({
  selector: 'page-register-band',
  templateUrl: 'register-band.html',
})
export class RegisterBandPage {
  band: Band = {
    name: ''
  }
  bandsList$: Observable<Band[]>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private regBand: SongsService,
    public alertCtrl: AlertController) {

    this.bandsList$ = this.regBand.getBandList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  ionViewWillLoad() {
    this.band = this.navParams.get('band');
  }

  deleteBand(band: Band) {
    const confirm = this.alertCtrl.create({
      title: 'Delete',
      message: ' Do you want to delete: ' + band.name + ' ?',
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
            this.regBand.removeBand(band);
          }
        }
      ]
    });
    confirm.present();
  }


}

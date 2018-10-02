import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Band } from '../../../models/band.model';
import { BandProvider } from '../../../providers/band/band';


/**
 * Generated class for the EditBandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-band',
  templateUrl: 'edit-band.html',
})
export class EditBandPage {
  band: Band = {
    name: ''
  }
  constructor(private regBand: BandProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.band = this.navParams.get('band');
  }

  editBand(band: Band) {
    this.regBand.editBand(band).then(() => {
      this.navCtrl.push('Bands');
    });

  }
}

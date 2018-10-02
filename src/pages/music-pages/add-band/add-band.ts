import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Band } from '../../../models/band.model';
import { BandProvider } from '../../../providers/band/band';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AddBandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-band',
  templateUrl: 'add-band.html',
})
export class AddBandPage {
  band: Band = {
    name: ''
  }
  constructor(
    private regBand: BandProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBandPage');
  }
  addNotification() {
    const toast = this.toastCtrl.create({
      message: 'New band was added succesfully!',
      duration: 3000,
      position:'top'
    });
    toast.present();

  }
  addBand(band: Band) {
    this.regBand.addBand(band).then(ref => {
      this.addNotification();
      this.navCtrl.setRoot('Bands', { key: ref.key })
    });
  }

}

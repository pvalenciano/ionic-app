import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the QrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr',
  templateUrl: 'qr.html',
})
export class QrPage {
  options: BarcodeScannerOptions;
  encodText: string = '';
  encodedData: any = {};
  scannedData: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public scanner: BarcodeScanner,
    public platform: Platform
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrPage');
  }
  scan() {
    this.options = {
      prompt: 'Scan you barcode'
    };
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
    }, (err) => {
      console.error('Error scan: ', err);
    })
  }
  encode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => {
      this.encodedData = data;
    }, (err) => {
      console.error('Error encode: ', err);

    })
    // if (this.platform.is('cordova')) {
    //   this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => {
    //     this.encodedData = data;
    //   }, (err) => {
    //     console.error('Error encode: ', err);

    //   })
    // } else {
    //   console.log("no es");

    // }

  }
}

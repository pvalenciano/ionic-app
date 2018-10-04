import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the TopNavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'top-navbar',
  templateUrl: 'top-navbar.html'
})
export class TopNavbarComponent {

  text: string;

  constructor(private usProvider: UserProvider, public alertCtrl: AlertController) {
    console.log('Hello TopNavbarComponent Component');
    this.text = 'Hello World';
  }
  logout() {
    const confirm = this.alertCtrl.create({
      title: ' Logout',
      message: ' Do you want to logout ?',
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
            this.usProvider.signOut();

          }
        }
      ]
    });
    confirm.present();
  }
}

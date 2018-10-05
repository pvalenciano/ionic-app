import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers';
import { LoginPage } from '../login/login';
import { NotesPage } from '../notes-pages/notes/notes';
import { ProfilePage } from '../profile/profile';


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// export interface PageInface {
//   title: string;s
//   pageName: string;
//   tabComponent?: any;
//   index?: number;
//   icon: string;
// }


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})

export class MenuPage {
  public rootPage;
  // public rootPage: string;

  @ViewChild(Nav) nav: Nav;
  // pages: Array<{ title: string, component: string, openTab?: any, icon: string }>;
  pages:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private angularFireAuth: AngularFireAuth,
    private userProvider: UserProvider) {

    this.userProvider.getAuth().subscribe(auth => {
      if (auth) {
         this.rootPage = HomePage;

        this.pages = [
          { title: 'Home', component: HomePage, openTab: 1, icon: 'home' },
          { title: 'Notes', component: NotesPage , openTab: 3, icon: 'ios-bookmarks' },
          { title: 'Profile', component: ProfilePage, openTab: 5, icon: 'person' },

          // { title: 'Home', component: 'Home', openTab: 1, icon: 'home' },
          // { title: 'Notes', component: 'Notes', openTab: 3, icon: 'ios-bookmarks' },
          // { title: 'Profile', component: 'Profile', openTab: 5, icon: 'person' },

        ];
      } else {
        console.log("no logueado");

      }
    })



  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MENU');
  }
  ngOnInit() {
    // this.nav.push(this.rootPage)
  }
  openPage(page) {
    this.nav.setRoot(page.component, { openTab: page.openTab });
    // this.nav.push(page.component, { openTab: page.openTab })
  }


}

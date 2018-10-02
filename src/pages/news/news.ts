import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'News' })
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  data: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private newsProv: NewsProvider) {

  }

  ngOnInit() {
    this.newsProv.getData('top-headlines?country=us&category=business').subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  ionViewWillLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}

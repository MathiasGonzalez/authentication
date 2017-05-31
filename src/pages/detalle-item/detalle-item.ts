import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetalleItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalle-item',
  templateUrl: 'detalle-item.html',
})
export class DetalleItemPage {
  protected item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    console.log(navParams.data);
    this.item = navParams.data;
  }
  valor1Blured() {
    console.log("blured")
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleItemPage');
  }
  closeModal() {
    this.viewCtrl.dismiss({ logout: false });
  }

}

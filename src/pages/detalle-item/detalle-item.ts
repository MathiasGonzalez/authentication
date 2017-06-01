import { PrivatePage } from '../privatePage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MainItem } from "../../entities/mainItem";

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
export class DetalleItemPage extends PrivatePage {

  protected item: MainItem;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    super(navCtrl, navParams);
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
  save() {
    let uid = this.authorization.currentUser.uid;
    this.realtimeDb.get(`/${uid}/${this.item.id}`).set(JSON.parse(JSON.stringify(this.item)))
    console.log(this.item);
    //this.realtimeDb.save(JSON.parse(JSON.stringify(this.item)));
  }

}

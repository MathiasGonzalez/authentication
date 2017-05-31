import { PrivatePage } from '../privatePage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetalleItemPage } from "../detalle-item/detalle-item";
import { MainItem } from "../../entities/mainItem";

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard extends PrivatePage {

  myInput; string;

  protected showSeacrhBar = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {
    super(navCtrl, navParams);
    this.data = [];
    <any>this.realtimeDb.get("/").subscribe(x => {
      Reflect.ownKeys((<Object>x)).forEach(k => {
        if (k && x[k] && x[k].id)
          this.data.push(x[k]);        
      });      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dashboard');
  }


  mostrarSearchBar() {
    this.showSeacrhBar = !this.showSeacrhBar;
  }

  onInput() {
  }

  onCancel() {

  }

  protected mostrarModalConfirmacion(item: any) {
    let profileModal = this.modalController.create(DetalleItemPage, item);
    profileModal.onDidDismiss(data => {
      if (data && data.logout) {

      }
    });
    profileModal.present();

  }


  protected _mainItems: Array<MainItem>;
  get mainItems(): Array<MainItem> {
    return this._mainItems;
  }

  set mainItems(val: Array<MainItem>) {
    this._mainItems = <Array<MainItem>>val;
  }


  protected data = [
    // {
    //   id: "idX1",
    //   valor1: "valor1",
    //   valor2: "valor2",
    //   tags: ["tag1", "tag2"],
    //   fecha: "11/5/1990"
    // },
    // {
    //   id: "idX2",
    //   valor1: "valor1",
    //   valor2: "valor2",
    //   tags: ["tag1", "tag2"],
    //   fecha: "11/5/1990"
    // },
    // {
    //   id: "idX3",
    //   valor1: "valor1",
    //   valor2: "valor2",
    //   tags: ["tag1", "tag2"],
    //   fecha: "11/5/1990"
    // }
  ];

}

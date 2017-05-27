import { BasePage } from '../basePage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetalleItemPage } from "../detalle-item/detalle-item";

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
export class Dashboard extends BasePage {

  myInput; string;

  protected showSeacrhBar = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {
    super(navCtrl, navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dashboard');
  }

  ionViewCanEnter(): boolean {
    return true;
  }

  mostrarSearchBar() {
    this.showSeacrhBar = !this.showSeacrhBar;
  }

  onInput() {
  }

  onCancel() {

  }

  protected mostrarModalConfirmacion(item:any) {
    let profileModal = this.modalController.create(DetalleItemPage,item);
    profileModal.onDidDismiss(data => {
      if (data && data.logout) {

      }
    });
    profileModal.present();

  }

  protected data = [
    {
      valor1: "valor1",
      valor2: "valor2",
      tags: ["tag1", "tag2"],
      fecha: new Date().toDateString()
    },
    {
      valor1: "valor1",
      valor2: "valor2",
      tags: ["tag1", "tag2"],
      fecha: new Date().toString()
    },
    {
      valor1: "valor1",
      valor2: "valor2",
      tags: ["tag1", "tag2"],
      fecha: new Date().toString()
    }
  ];

}

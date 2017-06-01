import { PrivatePage } from '../privatePage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetalleItemPage } from "../detalle-item/detalle-item";
import { MainItem } from "../../entities/mainItem";
import { Field } from "../../entities/field";

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

  }

  ionViewDidLoad() {
    if (this.authorization.authenticated) {
      this.cargaInicial();
    }
  }


  mostrarSearchBar() {
    this.showSeacrhBar = !this.showSeacrhBar;
  }

  onInput(event: any) {
    if (this.authorization.authenticated) {
      let uid = this.authorization.currentUser.uid;

      let input = this.myInput;

      this.data = [];

      if (input) {
        this.buscar(input);
      } else {
        this.cargaInicial();
      }
    }
  }

  cargaInicial() {
    let uid = this.authorization.currentUser.uid;
    <any>this.realtimeDb.get(`/${uid}`).subscribe(x => {
      Reflect.ownKeys((<Object>x)).forEach(k => {
        if (k && x[k] && x[k].id)
          this.data.push(x[k]);
      });
    });
  }
  
  buscar(input: string) {
    let uid = this.authorization.currentUser.uid;
    var ref = this.realtimeDb.db.database.ref(uid);
    ref.orderByChild("id").equalTo(input).on("child_added", (function (snapshot) {
      this.realtimeDb.get(`/${uid}/${snapshot.key}`).subscribe(x => {
        this.data.push(x);
      })
    }).bind(this));
  }




  onCancel() {

  }

  protected mostrarModalConfirmacion(item: MainItem) {
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
    // <MainItem>{
    //   id: "idX1",
    //   fields: <Array<Field>>[{
    //     valor1: "valor1",
    //     valor2: "valor2"
    //   }],
    //   tags: ["tag1", "tag2"],
    //   fecha: "11/5/1990"
    // },
    // <MainItem>{
    //   id: "idX2",
    //   fields: <Array<Field>>[{
    //     valor1: "valor1",
    //     valor2: "valor2"
    //   }],
    //   tags: ["tag1", "tag2"],
    //   fecha: "11/5/1990"
    // },
    // <MainItem>{
    //   id: "idX3",
    //   fields: <Array<Field>>[{
    //     valor1: "valor1",
    //     valor2: "valor2"
    //   }],
    //   tags: ["tag1", "tag2"],
    //   fecha: "11/5/1990"
    // },
  ];

}

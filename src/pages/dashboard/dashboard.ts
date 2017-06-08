import { NewSnippetPage } from '../new-snippet/new-snippet';
import { PrivatePage } from '../privatePage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetalleItemPage } from "../detalle-item/detalle-item";
import { MainItem } from "../../entities/mainItem";

import { SampleModalPage } from "../sample-modal/sample-modal";
import { UserLogin } from "../user-login/user-login";
import { AddSnippetIn, Snippet, FirstSnippetsIn, FirstSnippetsOut, Field, AddSnippetOut } from "../../generated/proxy";
import { AppModule } from "../../app/app.module";

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

      if (input) {
        this.buscar(input);
      } else {
        this.cargaInicial();
      }
    }
  }

  cargaInicial() {

    // let uid = this.authorization.currentUser.uid;
    // <any>this.realtimeDb.get(`/${uid}`).subscribe(x => {
    //   this.data = [];
    //   Reflect.ownKeys((<Object>x)).forEach(k => {
    //     if (k && x[k] && x[k].id)
    //       this.data.push(x[k]);
    //   });
    // });

    let input = new FirstSnippetsIn();
    input.user = AppModule.currentUser;
    this.snippetsClient.firstSnippets(input).subscribe((result: FirstSnippetsOut) => {
      this.data = result.snippets;
    })


  }

  buscar(input: string) {
    this.data = [];
    // let uid = this.authorization.currentUser.uid;
    // var ref = this.realtimeDb.db.database.ref(uid);
    // ref.orderByChild("id").equalTo(input).on("child_added", (function (snapshot) {
    //   this.realtimeDb.get(`/${uid}/${snapshot.key}`).subscribe(x => {
    //     this.data.push(x);
    //   })
    // }).bind(this));
  }




  onCancel() {

  }

  protected mostrarModalConfirmacion(item: Snippet) {
    let profileModal = this.modalController.create(DetalleItemPage, item);
    profileModal.onDidDismiss(data => {
      if (data && data.logout) {

      }
    });
    profileModal.present();

  }
  public addSnippet(): void {
    let profileModal = this.modalController.create(NewSnippetPage, null);
    profileModal.onDidDismiss(this.processAddSnippet.bind(this));
    profileModal.present();
  }

  protected processAddSnippet(output: AddSnippetOut): void {
    if (output && output.result === "OK") {
      if (this.data) {
        this.data.push(output.snippet);
      } else {
        this.data = [output.snippet];
      }
    }
  }

  protected editSnippet(snippet: Snippet) {
    let profileModal = this.modalController.create(NewSnippetPage, snippet);
    profileModal.onDidDismiss(this.processEditSnippet.bind(this));
    profileModal.present();
  }

  protected processEditSnippet(output: AddSnippetOut): void {
    if (output && output.result === "OK") {
      if (this.data) {
        this.data.push(output.snippet);
      } else {
        this.data = [output.snippet];
      }
    }
  }

  protected data: Array<Snippet> = [

  ];

}

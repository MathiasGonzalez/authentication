import { PrivatePage } from '../privatePage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


import { Field, Snippet } from "../../generated/proxy";

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

  protected item: Snippet;

  protected newField: Field;

 


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



  addFields() {
    if (!this.newField) {
      this.newField = (<Field>{ name: "", value: "", isLink: false })
    } else {
      this.pushNewFields();
      this.newField = undefined;
    }
  }

  pushNewFields() {
    this.item.fields.push(JSON.parse(JSON.stringify(this.newField)));
  }



  get newValor1(): string {
    return this.newField && this.newField.name;
  }

  set newValor1(val: string) {
    if (this.newField)
      this.newField.name = <string>val;
  }

  get newValor2(): string {
    return this.newField && this.newField.value;
  }

  set newValor2(val: string) {
    if (this.newField)
      this.newField.value = <string>val;
  }

  get isLink(): boolean {
    return this.newField && this.newField.isLink;
  }

  set isLink(val: boolean) {
    if (this.newField)
      this.newField.isLink = <boolean>val;
  }

}

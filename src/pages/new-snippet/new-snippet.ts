import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Field, Snippet, AddSnippetIn, AddSnippetOut } from "../../generated/proxy";
import { PrivatePage } from "../privatePage";
import { AppModule } from "../../app/app.module";

/**
 * Generated class for the NewSnippetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-snippet',
  templateUrl: 'new-snippet.html',
})
export class NewSnippetPage extends PrivatePage {


  protected currentSnippet: Snippet;

  protected newField: Field;




  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    super(navCtrl, navParams);
    console.log("new Snippet navParamData :", navParams.data);
    this.currentSnippet = navParams.data || new Snippet();
  }
  valor1Blured() {
    console.log("blured")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleItemPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  save() {
    // let uid = this.authorization.currentUser.uid;
    // this.realtimeDb.get(`/${uid}/${this.item.id}`).set(JSON.parse(JSON.stringify(this.item)))
    // console.log(this.item);
    // //this.realtimeDb.save(JSON.parse(JSON.stringify(this.item)));
    this.addSnippet();
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
    this.currentSnippet.fields.push(JSON.parse(JSON.stringify(this.newField)));
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


  //#region
  addSnippet() {
    let input = new AddSnippetIn();
    input.snippet = this.currentSnippet;
    input.user = AppModule.currentUser;
    this.snippetsClient.addSnippet(input).subscribe(this.processAddSnippet.bind(this))
  }

  protected processAddSnippet(output: AddSnippetOut): void {
    if (output.result === "OK") {
      this.viewCtrl.dismiss(output.snippet);
    }
  }
  //#endregion


}

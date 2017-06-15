import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Group } from "../../generated/proxy";
import { PrivatePage } from "../privatePage";

/**
 * Generated class for the GroupsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage extends PrivatePage {

  public groups: Array<Group> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super(navCtrl, navParams);
  }

  ionViewDidLoad() {

  }

}

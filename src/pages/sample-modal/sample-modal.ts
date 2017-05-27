import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserSignup } from "../user-signup/user-signup";

/**
 * Generated class for the SampleModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sample-modal',
  templateUrl: 'sample-modal.html',
})
export class SampleModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SampleModalPage');
  }

  protected cerrarModal() {
    this.viewCtrl.dismiss({logout:false});
  }

  protected logOut(){       
      this.viewCtrl.dismiss({logout:true});
  }

}

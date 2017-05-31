import { NavController, NavParams } from 'ionic-angular';
import { BasePage } from './basePage';
export class PrivatePage extends BasePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        super(navCtrl, navParams);
    }

    ionViewCanEnter(): boolean {
        console.log("can Enter ", this.authorization && this.authorization.authenticated)
        return this.authorization && this.authorization.authenticated;
    }
}
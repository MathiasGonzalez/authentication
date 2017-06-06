import { RealTimeDB } from '../providers/realTimeDB';
import { NavController, NavParams, AlertController, AlertOptions } from "ionic-angular";
import { AppModule } from "../app/app.module";
import { Authorization } from "../providers/authorization";
import { SnippetsClient } from "../generated/proxy";

export class BasePage {

    authorization: Authorization;
    realtimeDb: RealTimeDB;
    alertCtrl: AlertController;
    snippetsClient: SnippetsClient;
    get isWeb(): boolean {
        return AppModule.isWeb;
    }


    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.authorization = AppModule.injector.get(Authorization);
        this.realtimeDb = AppModule.injector.get(RealTimeDB);
        this.alertCtrl = AppModule.injector.get(AlertController);
        this.snippetsClient = AppModule.injector.get(SnippetsClient);
    }

    /**
     * Runs when the page has loaded. This event only happens once per page being created. If a page leaves but is cached, then this event will not fire again on a subsequent viewing. The ionViewDidLoad event is good place to put your setup code for the page.
     */
    ionViewDidLoad(): void {

    }
    /**
     * Runs when the page is about to enter and become the active page.
     */
    ionViewWillEnter(): void {

    }
    /**
     * Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.
     */
    ionViewDidEnter(): void {

    }
    /**
     * boolean/Promise<void>	Runs before the view can enter. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can enter
     */
    ionViewCanEnter(): boolean {
        return true;
    }
    /**
     * Runs before the view can leave. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can leave
     */
    ionViewCanLeave(): boolean {
        return true;
    }
    /**
     * Runs when the page is about to be destroyed and have its elements removed.
     */
    ionViewWillUnload(): void {

    }


    // ionViewDidLoad	void	Runs when the page has loaded. This event only happens once per page being created. If a page leaves but is cached, then this event will not fire again on a subsequent viewing. The ionViewDidLoad event is good place to put your setup code for the page.
    // ionViewWillEnter	void	Runs when the page is about to enter and become the active page.
    // ionViewDidEnter	void	Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.
    // ionViewWillLeave	void	Runs when the page is about to leave and no longer be the active page.
    // ionViewDidLeave	void	Runs when the page has finished leaving and is no longer the active page.
    // ionViewWillUnload	void	Runs when the page is about to be destroyed and have its elements removed.
    // ionViewCanEnter	boolean/Promise<void>	Runs before the view can enter. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can enter
    // ionViewCanLeave	boolean/Promise<void>	Runs before the view can leave. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can leave

    mostrarAlerta(title: string, message: string) {
        let alertConfig: AlertOptions = {
            title: title,
            message: message,
            buttons: ['Ok']
        };
        let alert = this.alertCtrl.create(alertConfig);
        alert.present();
    }
    validateEmail(email: string) {
        // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        return re.test(email);
    }
}

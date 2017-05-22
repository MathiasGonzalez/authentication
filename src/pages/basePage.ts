
import { NavController, NavParams } from "ionic-angular";

export class BasePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    ionViewWillUnload():void{

    }

    // ionViewDidLoad	void	Runs when the page has loaded. This event only happens once per page being created. If a page leaves but is cached, then this event will not fire again on a subsequent viewing. The ionViewDidLoad event is good place to put your setup code for the page.
    // ionViewWillEnter	void	Runs when the page is about to enter and become the active page.
    // ionViewDidEnter	void	Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.
    // ionViewWillLeave	void	Runs when the page is about to leave and no longer be the active page.
    // ionViewDidLeave	void	Runs when the page has finished leaving and is no longer the active page.
    // ionViewWillUnload	void	Runs when the page is about to be destroyed and have its elements removed.
    // ionViewCanEnter	boolean/Promise<void>	Runs before the view can enter. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can enter
    // ionViewCanLeave	boolean/Promise<void>	Runs before the view can leave. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can leave

}

import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
// Do not import from 'firebase' as you'll lose the tree shaking benefits
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import { User } from "../generated/proxy";

@Injectable()
export class Authorization {

  private authState: Observable<firebase.User>;
  public currentUser: firebase.User | User;
  success: EventEmitter<any> = new EventEmitter<any>();

  gToken: any;

  constructor(public afAuth: AngularFireAuth) {
    this.authState = afAuth.authState;
    afAuth.authState.subscribe((user: firebase.User) => {
      this.currentUser = user;
      this.success.emit(user)
    });
  }

  get authenticated(): boolean {
    return this.currentUser !== null;
  }

  signInWithFacebook(): firebase.Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  public signInWithEmailAndPassword(email: string, pass: string): void {
    let provider = new firebase.auth.EmailAuthProvider();

    this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(val => {
      if (val) {
        console.log("signInWithEmailAndPassword : ", val)
        this.currentUser = val.user ? val.user : val;
      }
    });

  }

  public signInWithGoogle(): void {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.afAuth.auth.getRedirectResult().then(((authData) => {
      if (authData.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        this.gToken = authData.credential.accessToken;

        // ...
      }
      // The signed-in user info.
      var user = authData.user;
      console.log(authData);
    }).bind(this))
      .catch(function (error) {
        console.log(error);
      });
  }




  public signOut(): void {
    this.afAuth.auth.signOut().then(() => {
      console.log("signed out")
    }, (error) => {
      console.log(error);
    });
  }

  displayName(): string {
    if (this.currentUser !== null) {
      return (<firebase.User>this.currentUser).displayName;
    } else {
      return '';
    }
  }
}

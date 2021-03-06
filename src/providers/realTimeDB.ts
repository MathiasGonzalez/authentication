import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// Do not import from 'firebase' as you'll lose the tree shaking benefits
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
/*
  Generated class for the DashboardServices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RealTimeDB {

  item: FirebaseObjectObservable<any>;
  constructor(public db: AngularFireDatabase) {
    this.item = this.get('/item');
  }

  get(item: string): FirebaseObjectObservable<any> {
    return this.db.object(item);
  }

  save(obj:any) {
    this.item.set(obj).then(_=>console.log(_));
  }

  // save(newName: string) {
  //   this.item.set({ name: newName }).then(_=>console.log(_));
  // }
  update(newSize: string) {
    this.item.update({ size: newSize });
  }
  delete() {
    this.item.remove();
  }

}
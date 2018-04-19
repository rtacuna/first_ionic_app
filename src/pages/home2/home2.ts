import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  name: string;
  name2: string;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('data');
    this.name2 = fire.auth.currentUser.email;
  }

  logOut(){
    this.fire.auth.signOut().then(() => {
      this.navCtrl.setRoot(HomePage);
    }
    );
  }

}

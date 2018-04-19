import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { MapPage } from '../map/map';
import { RoutePage } from '../route/route';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  signIn(){
    this.navCtrl.push(LoginPage);
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  map(){
    this.navCtrl.push(MapPage);
  }

  route(){
    this.navCtrl.push(RoutePage);
  }

}

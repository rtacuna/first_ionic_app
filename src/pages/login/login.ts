import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { Home2Page } from '../home2/home2';

 @Component({
   selector: 'page-login',
   templateUrl: 'login.html'
 })
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  alert(mensaje: string){
    this.alertCtrl.create({
      title: 'Login',
      subTitle: mensaje,
      buttons: ['OK']
    }).present();
  }

  signIn(){

    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
    .then(data =>{
      this.alert('Sesion Correcta');
      this.navCtrl.setRoot(Home2Page, {
        data: this.uname.value
      });
    })
    .catch(error =>{
      this.alert(error.message);
    });

  }

}

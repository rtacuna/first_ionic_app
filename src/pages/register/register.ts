import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  alert(mensaje: string){
    this.alertCtrl.create({
      title: 'Login',
      subTitle: mensaje,
      buttons: ['OK']
    }).present();
  }


  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value)
    .then(data =>{
      this.alert('Sesion Registrada');
      this.navCtrl.setRoot(HomePage);
    })
    .catch(error => {
      this.alert(error.message);
    });
  }



}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Home2Page } from '../pages/home2/home2';
import { MapPage } from '../pages/map/map';
import { RoutePage } from '../pages/route/route';

const firebaseAuth = {
    apiKey: "AIzaSyBLqy21lRxtHri_gP9ORh7Boe6VG5DWhGA",
    authDomain: "proyectoespecialidad-d22f6.firebaseapp.com",
    databaseURL: "https://proyectoespecialidad-d22f6.firebaseio.com",
    projectId: "proyectoespecialidad-d22f6",
    storageBucket: "proyectoespecialidad-d22f6.appspot.com",
    messagingSenderId: "629987691843"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    Home2Page,
    MapPage,
    RoutePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    Home2Page,
    MapPage,
    RoutePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

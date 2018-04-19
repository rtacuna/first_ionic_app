import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';




@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement;
  map: any;
  latitude;
  longitude;

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
  }

  ionViewDidLoad() {
  }

  theLocation(){
    this.nativeGeocoder.forwardGeocode('Berlin')
    .then((coordinates: NativeGeocoderForwardResult) => console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude))
    .catch((error: any) => document.getElementById('texto').innerHTML = "Error: "+ error);
  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }

  initMap(){
    console.log("Empece el mapa");

    this.geolocation.getCurrentPosition().then((position) => {


          let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }

          console.log("Creando mapa");

          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

          this.addMarker();
          console.log("Terminando mapa");

        }, (err) => {
          console.log(err);
        });

  }



}

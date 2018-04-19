import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})
export class RoutePage {

  start:any;
  end:any;
  @ViewChild('map') mapElement;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: this.start,
          destination: this.end,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
    })}

  mapRoute(){
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 1,
          center: {lat: -34.9290, lng: 138.6010}
        });
    directionsDisplay.setMap(map);

    this.calculateAndDisplayRoute(directionsService, directionsDisplay);

  }

}

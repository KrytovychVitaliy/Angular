import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  apiKey = 'AIzaSyCM2nK5YCFFnH2EXrXQdgiS5aygJDOkNYg';
  mapLocation = { lat: 49.84178857391628, lng: 	24.031238169561295 } //пл.Ринок, 1

  sector1 = [ //прямокутник 1
    {lat: 49.844575, lng: 24.026266}, //верхня ліва
    {lat: 49.844575, lng: 24.038749}, //верхня права

    {lat: 49.839575, lng: 24.038749}, //нижня права
    {lat: 49.839575, lng: 24.026266} //нижня ліва
  ];

  sector2 = [ //прямокутник 2
    {lat: 49.849775, lng: 24.005900}, //верхня ліва
    {lat: 49.849775, lng: 24.041370}, //верхня права

    {lat: 49.832200, lng: 24.041370}, //нижня права
    {lat: 49.832200, lng: 24.005900} //нижня ліва
  ];

   sector1Param = {
    paths: this.sector1,
    strokeColor: 'green',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'green',
    editable: false,
    fillOpacity: 0.25,
    geodesic: true
   }

   sector2Param = {
    paths: this.sector2,
    strokeColor: 'yellow',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'yellow',
    editable: false,
    fillOpacity: 0.25,
    geodesic: true
   }

  constructor(
    private constantsService: ConstantsService
  ) { }

  whichSector(lat, lng): number{
    if ( //якщо зелений сектор
      lat <= this.sector1[0].lat
      &&
      lat >= this.sector1[3].lat
      &&
      lng >= this.sector1[3].lng
      &&
      lng <= this.sector1[2].lng
    ) {
      return this.constantsService.costGreenSector;
    } else if ( //якщо жовтий сектор
      lat <= this.sector2[0].lat
      &&
      lat >= this.sector2[3].lat
      &&
      lng >= this.sector2[3].lng
      &&
      lng <= this.sector2[2].lng
    ) {
      return this.constantsService.costYellowSector;
    } else { //якщо не зелений і не жовтий
      return this.constantsService.costAnotherSector;
    }
  }
}

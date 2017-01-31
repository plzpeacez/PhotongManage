import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photongstop',
  templateUrl: './photongstop.component.html',
  styleUrls: ['./photongstop.component.css']
})
export class PhotongstopComponent implements OnInit {

  val1: number;
  val2: number;

  title: string = 'ป้ายจอดรถประจำทาง โพถ้อง ภูเก็ต';
  lat: number = 7.883135;
  lng: number = 98.387156;
  zoom: number = 15;

  latA: number = 7.896788;
  lngA: number = 98.368462;
  latB: number = 7.904144;
  lngB: number = 98.367557;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.addMarker();
  }

  latlng() {
    console.log(this.val1);
    console.log(this.val2);
    console.log(this.lat);
    console.log(this.lng);
    this.val1 = this.lat;
    this.val2 = this.lng;
    this.addMarker();
  }

  addMarker() {
    this.lat = this.val1;
    this.lng = this.val2;
    this.router.navigate(['/photongstop']);
  }

}

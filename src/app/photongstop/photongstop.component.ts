import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photongstop',
  templateUrl: './photongstop.component.html',
  styleUrls: ['./photongstop.component.css']
})
export class PhotongstopComponent implements OnInit {

  title: string = 'ป้ายจอดรถประจำทาง โพถ้อง ภูเก็ต';
  lat: number = 7.883135;
  lng: number = 98.387156;
  zoom: number = 15;

  latA: number = 7.896788;
  lngA: number = 98.368462;
  latB: number = 7.904144;
  lngB: number = 98.367557;

  constructor() { }

  ngOnInit() {
  }

}

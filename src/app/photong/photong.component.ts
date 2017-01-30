import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photong',
  templateUrl: './photong.component.html',
  styleUrls: ['./photong.component.css']
})
export class PhotongComponent implements OnInit {

  title: string = 'เส้นทางรถประจำทาง โพถ้อง ภูเก็ต';
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

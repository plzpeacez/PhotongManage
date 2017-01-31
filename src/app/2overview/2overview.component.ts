import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-2overview',
  templateUrl: './2overview.component.html',
  styleUrls: ['./2overview.component.css']
})
export class overview2Component implements OnInit {

  title: string = "รถประจำทาง สองแถว";

  constructor() { }

  ngOnInit() {
  }

}

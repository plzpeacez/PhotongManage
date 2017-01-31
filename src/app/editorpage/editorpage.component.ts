import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorpage',
  templateUrl: './editorpage.component.html',
  styleUrls: ['./editorpage.component.css']
})
export class EditorpageComponent implements OnInit {

  text1: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  text2: string;

  constructor() { }

  ngOnInit() {
  }

}

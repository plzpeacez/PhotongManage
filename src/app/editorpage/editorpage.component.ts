import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorpage',
  templateUrl: './editorpage.component.html',
  styleUrls: ['./editorpage.component.css']
})
export class EditorpageComponent implements OnInit {

  msgs: any[] = [];

  text: string;

  text1: string;

  text2: string;

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
  }

  clear() {
    this.text1 = null;
    this.text = null;
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Cleared' });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phreport',
  templateUrl: './phreport.component.html',
  styleUrls: ['./phreport.component.css']
})
export class PhreportComponent implements OnInit {

  msgs: any[] = [];

  items: any[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Update', icon: 'fa-refresh', command: () => {
          this.update();
        },
        routerLink: ['/editorpage']
      },
      {
        label: 'Delete', icon: 'fa-close', command: () => {
          this.delete();
        }
      },
      { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
      { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
    ];
  }

  save() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
  }

  update() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
  }

}

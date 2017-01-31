import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phreport',
  templateUrl: './phreport.component.html',
  styleUrls: ['./phreport.component.css']
})
export class PhreportComponent implements OnInit {

  msgs: any[] = [];

  items: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Save', icon: 'fa-check', command: () => {
          this.save();
        },
        // routerLink: ['/editorpage']
      },
      {
        label: 'Delete', icon: 'fa-close', command: () => {
          this.delete();
        }
      },
      // { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
      // { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
    ];
  }

  save() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
  }

  update() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
    this.router.navigate(['/editorpage']);
  }

  delete() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
  }

}

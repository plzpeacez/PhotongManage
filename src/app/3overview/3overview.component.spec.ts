/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { 3overviewComponent } from './3overview.component';

describe('3overviewComponent', () => {
  let component: 3overviewComponent;
  let fixture: ComponentFixture<3overviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 3overviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(3overviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

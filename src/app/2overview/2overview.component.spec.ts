/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { 2overviewComponent } from './2overview.component';

describe('2overviewComponent', () => {
  let component: 2overviewComponent;
  let fixture: ComponentFixture<2overviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 2overviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(2overviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhreportComponent } from './phreport.component';

describe('PhreportComponent', () => {
  let component: PhreportComponent;
  let fixture: ComponentFixture<PhreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

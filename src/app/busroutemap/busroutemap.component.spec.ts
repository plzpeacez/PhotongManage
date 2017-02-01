/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BusroutemapComponent } from './busroutemap.component';

describe('BusroutemapComponent', () => {
  let component: BusroutemapComponent;
  let fixture: ComponentFixture<BusroutemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusroutemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusroutemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

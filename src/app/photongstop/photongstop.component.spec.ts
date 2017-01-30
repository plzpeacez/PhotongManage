/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhotongstopComponent } from './photongstop.component';

describe('PhotongstopComponent', () => {
  let component: PhotongstopComponent;
  let fixture: ComponentFixture<PhotongstopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotongstopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotongstopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

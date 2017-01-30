/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhotongComponent } from './photong.component';

describe('PhotongComponent', () => {
  let component: PhotongComponent;
  let fixture: ComponentFixture<PhotongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BusstopgmapComponent } from './busstopgmap.component';

describe('BusstopgmapComponent', () => {
  let component: BusstopgmapComponent;
  let fixture: ComponentFixture<BusstopgmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusstopgmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusstopgmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

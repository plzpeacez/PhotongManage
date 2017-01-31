/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditorpageComponent } from './editorpage.component';

describe('EditorpageComponent', () => {
  let component: EditorpageComponent;
  let fixture: ComponentFixture<EditorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

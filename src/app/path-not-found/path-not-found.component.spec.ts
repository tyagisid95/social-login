/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PathNotFoundComponent } from './path-not-found.component';

describe('PathNotFoundComponent', () => {
  let component: PathNotFoundComponent;
  let fixture: ComponentFixture<PathNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChartlibComponent } from './chartlib.component';

describe('ChartlibComponent', () => {
  let component: ChartlibComponent;
  let fixture: ComponentFixture<ChartlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

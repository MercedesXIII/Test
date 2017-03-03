/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableEditingComponent } from './table-editing.component';

describe('TableEditingComponent', () => {
  let component: TableEditingComponent;
  let fixture: ComponentFixture<TableEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

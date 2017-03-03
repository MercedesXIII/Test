/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TablePagingComponent } from './table-paging.component';

describe('TablePagingComponent', () => {
  let component: TablePagingComponent;
  let fixture: ComponentFixture<TablePagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

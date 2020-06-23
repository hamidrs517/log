import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { IrisaAlertLogTableView } from './irisa-alert-log-table-view';

describe('IrisaAlertLogTableView', () => {
  let component: IrisaAlertLogTableView;
  let fixture: ComponentFixture<IrisaAlertLogTableView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IrisaAlertLogTableView],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrisaAlertLogTableView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

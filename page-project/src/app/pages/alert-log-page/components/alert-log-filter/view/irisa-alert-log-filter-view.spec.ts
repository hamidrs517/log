import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { IrisaAlertLogfilterView } from './irisa-alert-log-filter-view';

describe('IrisaAlertLogfilterView', () => {
  let component: IrisaAlertLogfilterView;
  let fixture: ComponentFixture<IrisaAlertLogfilterView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IrisaAlertLogfilterView],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrisaAlertLogfilterView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

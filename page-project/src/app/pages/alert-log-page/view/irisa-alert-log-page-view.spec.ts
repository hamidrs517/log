import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrisaAlertLogPageView } from './irisa-alert-log-page-view';

describe('IrisaAlertLogPageView', () => {
  let component: IrisaAlertLogPageView;
  let fixture: ComponentFixture<IrisaAlertLogPageView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IrisaAlertLogPageView]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrisaAlertLogPageView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

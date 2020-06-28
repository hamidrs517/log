import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAlert } from 'src/app/models/alert';

@Component({
  selector: 'irisa-alert-log-filter-view',
  templateUrl: './irisa-alert-log-filter-view.html',
  styleUrls: ['./irisa-alert-log-filter-view.scss'],
})
export class IrisaAlertLogfilterView implements OnInit {

  // @Input('alert-filter') alertFilter: IAlertLogFilter
  @Input('alert-list') alertList: IAlert[]

  @Output('on-search-data') onSearchData: EventEmitter<IAlert> = new EventEmitter<IAlert>()
  @Input('alert-type-list') alertTypeList
  @Input('date-periods') datePeriods

  selectedAlerts: IAlert[] = [];
  alertsData: IAlert[] = [];

  @ViewChild('itemInput', { static: false }) itemInput: ElementRef<HTMLInputElement>;

  panelOpenState = false;
  filterForm: FormGroup

  // get pageNumber() { return this.filterForm.get('pageNumber'); }
  // get pageSize() { return this.filterForm.get('pageSize'); }
  get alerts() { return this.filterForm.get('alerts'); }
  get alertType() { return this.filterForm.get('alertType'); }
  get prm1() { return this.filterForm.get('prm1'); }
  get prm2() { return this.filterForm.get('prm2'); }
  get prm3() { return this.filterForm.get('prm3'); }
  get bodyPhrase() { return this.filterForm.get('bodyPhrase'); }
  get fromDate() { return this.filterForm.get('fromDate'); }
  get toDate() { return this.filterForm.get('toDate'); }
  // get f() { return this.filterForm.controls; }

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.error(this.filterForm)
    this.onSearchData.emit(
      this.filterForm.getRawValue()
    );
    let el = document.getElementById('tableResult');
    el.scrollIntoView({ behavior: "smooth" });
  }

  initForm(): void {
    this.filterForm = this.fb.group({
      alerts: [null],
      alertType: [null],
      prm1: [null],
      prm2: [null],
      prm3: [null],
      bodyPhrase: [null],
      fromDate: [null],
      toDate: [null]
    });
  }

  resetForm() {
    this.selectedAlerts = []
    this.alerts.setValue([])
    this.alertType.setValue(null)
    this.prm1.setValue(null)
    this.prm2.setValue(null)
    this.prm3.setValue(null)
    this.fromDate.setValue(null)
    this.toDate.setValue(null)
  }

  ngOnInit() {
    this.initForm()
  }

}

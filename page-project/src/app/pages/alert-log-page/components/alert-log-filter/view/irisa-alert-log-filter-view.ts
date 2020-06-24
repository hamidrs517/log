import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAlertLogFilter } from 'src/app/models/alert-log-filter';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'irisa-alert-log-filter-view',
  templateUrl: './irisa-alert-log-filter-view.html',
  styleUrls: ['./irisa-alert-log-filter-view.scss']
})
export class IrisaAlertLogfilterView implements OnInit {

  // @Input('alert-filter') alertFilter: IAlertLogFilter
  @Input('alert-list') alertList: any
  @Output('on-search-data') onSearchData: EventEmitter<IAlertLogFilter> = new EventEmitter<IAlertLogFilter>()
  @Input('alert-type-list') alertTypeList
  @Input('date-periods') datePeriods

  filterForm = this.fb.group({
    alerts: [[]],
    alertType: [null],
    prm1: [null],
    prm2: [null],
    prm3: [null],
    bodyPhrase: [null],
    fromDate: [null],
    toDate: [null]
  });



  // getSenderBitAddressErrorMessage() {
  //   return this.senderBitAddress.hasError('required') ? 'Sender Bitcoin Address is required' :
  //     this.senderBitAddress.hasError('minlength') ? 'Sender Bitcoin Address must be at least 16' :
  //       '';
  // }

  get pageNumber() { return this.filterForm.get('pageNumber'); }
  get pageSize() { return this.filterForm.get('pageSize'); }
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
    this.onSearchData.emit(
      this.filterForm.getRawValue()
    );
    let el=document.getElementById('tableResult');
    el.scrollIntoView({behavior:"smooth"});
  }

  ngOnInit() { }

}

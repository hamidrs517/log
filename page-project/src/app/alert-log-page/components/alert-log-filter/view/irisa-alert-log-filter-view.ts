import { Component, OnInit, Input } from '@angular/core';
import { IAlertLogFilter } from 'src/app/models/alert-log-filter';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'irisa-alert-log-filter-view',
  templateUrl: './irisa-alert-log-filter-view.html',
  styleUrls: ['./irisa-alert-log-filter-view.scss']
})
export class IrisaAlertLogfilterView implements OnInit {

  @Input('alert-filter') alertFilter: IAlertLogFilter
  @Input('alert-list') alertList: any

  filterForm = this.fb.group({
    pageNumber: [
      null,
      Validators.compose([
        Validators.required, Validators.minLength(1)
      ])
    ],
    pageSize: [
      null,
      Validators.compose([
        Validators.required, Validators.minLength(1)
      ])
    ],
    alerts: [[]],
    alertType: [null],
    prm1: [null],
    prm2: [null],
    prm3: [null],
    bodyPhrase: [null],
    fromDate: [null],
    toDate: [null]
  });

  alertTypeList = [
    { name: "", value: undefined },
    { name: "INFO", value: 1 },
    { name: "WARNING", value: 2 },
    { name: "DANGER", value: 3 },
    { name: "SUCCESS", value: 4 }
  ];
  dateList = [
    { name: "", value: 0 },
    { name: "Last Hour", value: 1 },
    { name: "Last 12 Hours", value: 2 },
    { name: "Last Day", value: 3 }
  ];

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
  get f() { return this.filterForm.controls; }

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    alert('Thanks!');
  }

  ngOnInit() {

  }

}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AlertLogService } from 'src/app/services/alert-log.service';
import { IAlertLogFilter } from 'src/app/models/alert-log-filter';
import { IAlert } from 'src/app/models/alert';

@Component({
  selector: 'irisa-alert-log-filter-presenter',
  template: `
  <irisa-alert-log-filter-view
    [alert-list]="alertList"
    [alert-type-list]="alertTypeList"
    [date-periods]="datePeriods"
    (on-search-data)="searchData($event)"
  >
  </irisa-alert-log-filter-view>
  `,
})
export class IrisaAlertLogFilterPresenter implements OnInit {
  alertList: IAlert[];
  alertTypeList: any[]

  onSearchData: EventEmitter<IAlertLogFilter> = new EventEmitter<IAlertLogFilter>()
  // alertTypeList
  datePeriods: any

  constructor(private alertLogService: AlertLogService) { }

  ngOnInit(): void {
    this.alertLogService.searchData.next({
      pageNumber: 0,
      pageSize: 10
    } as IAlertLogFilter)

    this.readAlerts()
    this.readAlertTypeList()
    this.readDatePeriods()
  }

  searchData(event: IAlertLogFilter) {
    console.info("submit filter form:", event)
    this.alertLogService.searchData.next(event)
  }

  readAlerts() {
    this.alertLogService.readAlerts().then((res) => {
      this.alertList = res
    }).catch(err => {
      console.error(err)
    })
  }

  readAlertTypeList() {
    this.alertLogService.readAlertTypeList().then((res) => {
      this.alertTypeList = res
    })
  }

  readDatePeriods() {
    this.alertLogService.readDatePeriods().then((res) => {
      this.datePeriods = res
    }).catch(err => {
      console.error(err)
    })
  }


}

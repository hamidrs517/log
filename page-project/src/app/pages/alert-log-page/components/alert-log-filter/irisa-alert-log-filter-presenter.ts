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
    (on-search-data)="onSearchDataFn($event)"
  >
  </irisa-alert-log-filter-view>
  `,
})
export class IrisaAlertLogFilterPresenter implements OnInit {
  alertList: IAlert[];
  alertTypeList: any[]

  onSearchData: EventEmitter<IAlertLogFilter> = new EventEmitter<IAlertLogFilter>()
  datePeriods: any
  filterData: IAlertLogFilter
  constructor(private alertLogService: AlertLogService) { }

  ngOnInit(): void {
    this.readAlerts()
    this.readAlertTypeList()
    this.readDatePeriods()
    this.filterData = this.alertLogService.latestFilterData
  }

  onSearchDataFn(event: IAlertLogFilter) {
    this.filterData = this.alertLogService.latestFilterData
    const searchData = this.mergeFilterData(this.filterData, event)
    // .next on _searchData: BehaviorSubject
    this.alertLogService.setFilterData(searchData)
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

  mergeFilterData(latestFilter, filterInForm) {
    const filters = { ...filterInForm, ...latestFilter }
    return filters
  }
}

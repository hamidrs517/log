import { Component, OnInit } from '@angular/core';
import { AlertLogService } from 'src/app/services/alert-log.service';
import { PageEvent } from '@angular/material/paginator';
import { IAlertLogFilter } from 'src/app/models/alert-log-filter';
import { IAlertLogList } from 'src/app/models/alert-log-list';

@Component({
  selector: 'alert-log-table2-presenter',
  template: `
  <alert-log-table2-view
    [alert-log-list]="alertLogList"
    (get-log-list)="getLogListWithPage($event)"
  >
  </alert-log-table2-view>
  `,
})
export class AlertLogTable2Presenter implements OnInit {
  pageNumber: number
  filterData: IAlertLogFilter
  alertLogList: IAlertLogList

  constructor(private alertLogService: AlertLogService) { }

  ngOnInit(): void {
    // this.filterData = this.alertLogService.latestFilterData
    this.alertLogList = this.alertLogService.alertLogList
  }

  getLogListWithPage(event: PageEvent) {
    this.filterData = this.alertLogService.latestFilterData
    const searchData = this.mergeFilterData(this.filterData, event)

    // .next on _searchData: BehaviorSubject
    this.alertLogService.setFilterData(searchData)
    this.alertLogList = this.alertLogService.alertLogList
    // this.getAlertLogList(searchData)

  }

  mergeFilterData(latestFilter, filterInPaginate: PageEvent) {
    const searchData = {
      ...latestFilter,
      pageNumber: filterInPaginate.pageIndex,
      pageSize: filterInPaginate.pageSize
    }
    return searchData
  }
}

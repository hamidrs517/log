import { Component, OnInit, Input } from '@angular/core';
import { AlertLogService } from 'src/app/services/alert-log.service';
import { IAlertLogItem } from 'src/app/models/alert-log-item';
import { PageEvent } from '@angular/material/paginator';
import { IAlertLogFilter } from 'src/app/models/alert-log-filter';

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
  searchData: IAlertLogFilter

  private _alertLogList: IAlertLogItem[];
  set alertLogList(list: IAlertLogItem[]) {
    this._alertLogList = list
  }

  get alertLogList(): IAlertLogItem[] {
    return this._alertLogList
  }

  constructor(private alertLogService: AlertLogService) { }

  ngOnInit(): void {
    this.getAlertLogList()
    this.alertLogService.searchData.subscribe(filters => {
      console.warn("filters", filters)
      this.searchData = filters
    })
  }

  getAlertLogList() {
    this.alertLogService.getAlertLogList(this.searchData).then((res: IAlertLogItem[]) => {
      this.alertLogList = res
    }).catch(err => {
      console.error(err)
    })
  }

  getLogListWithPage(event: PageEvent) {
    console.warn(event)
    const {
      length,
      pageIndex: pageNumber,
      pageSize,
      previousPageIndex
    } = event

    const searchData = {
      length,
      pageNumber,
      pageSize,
      ...this.searchData
    }

    this.alertLogService.getAlertLogList(searchData).then((res: IAlertLogItem[]) => {
      this.alertLogList = res
    }).catch(err => {
      console.error(err)
    })
  }
}

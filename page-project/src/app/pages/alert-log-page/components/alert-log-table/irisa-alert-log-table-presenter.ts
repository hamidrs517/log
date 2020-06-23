import { Component, OnInit, Input } from '@angular/core';
import { AlertLogService } from 'src/app/services/alert-log.service';
import { IAlertLogItem } from 'src/app/models/alert-log-item';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'irisa-alert-log-table-presenter',
  template: `
  <irisa-alert-log-table-view
    [alert-log-list]="alertLogList"
    (get-log-list)="getLogListWithPage($event)"
  >
  </irisa-alert-log-table-view>
  `,
})
export class IrisaAlertLogTablePresenter implements OnInit {
  pageNumber: number
  @Input('search-data') searchData

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

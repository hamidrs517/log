import { Component, OnInit } from '@angular/core';
import { AlertLogService } from 'src/app/services/alert-log.service';
import { IAlertLogItem } from 'src/app/models/alert-log-item';

@Component({
  selector: 'irisa-alert-log-table-presenter',
  template: `
  <irisa-alert-log-table-view
    [alert-log-list]="alertLogList"
  >
  </irisa-alert-log-table-view>
  `,
})
export class IrisaAlertLogTablePresenter implements OnInit {
  alertLogList: IAlertLogItem[];

  constructor(private alertLogService: AlertLogService) { }

  ngOnInit(): void {
    this.getAlertLogList()
  }

  getAlertLogList() {
    this.alertLogService.getAlertLogList().then((res: IAlertLogItem[]) => {
      this.alertLogList = res
    }).catch(err => {
      console.error(err)
    })
  }
}

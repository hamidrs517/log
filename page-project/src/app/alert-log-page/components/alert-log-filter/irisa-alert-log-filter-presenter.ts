import { Component, OnInit } from '@angular/core';
import { AlertLogService } from 'src/app/services/alert-log.service';
import { IAlertLogFilter } from 'src/app/models/alert-log-filter';

@Component({
  selector: 'irisa-alert-log-filter-presenter',
  template: `
  <irisa-alert-log-filter-view
    [alert-filter]="alertFilter"
    [alert-list]="alertList"
  >
  </irisa-alert-log-filter-view>
  `,
})
export class IrisaAlertLogFilterPresenter implements OnInit {
  alertFilter: IAlertLogFilter;
  alertList = []
  constructor(private alertLogService: AlertLogService) { }

  ngOnInit(): void {
    this.readAlerts()
  }

  readAlerts() {
    this.alertLogService.readAlerts().then((res) => {
      this.alertList = res
    }).catch(err => {
      console.error(err)
    })
  }


}

import { Injectable } from '@angular/core';
import { IAlertLogItem } from "../models/alert-log-item";
@Injectable({
  providedIn: 'root'
})
export class AlertLogService {

  EXAMPLE_DATA: IAlertLogItem[] = [
    {
      "alertLogId": 99149,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 11:02:04",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": 1000,
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99148,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 10:07:23",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": 1000,
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    }
  ]

  ALERT_LIST = [
    {
      "alertId": 1000,
      "title": "GENERAL",
      "template": " ",
      "prm1Title": null,
      "prm2Title": null,
      "prm3Title": null,
      "isSound": true,
      "isPopup": false,
      "isActvie": true,
      "isPublic": true,
      "alertTypeFk": 1,
      "alertTypeFkNavigation": null,
      "alertLog": [],
      "connectUgAlert": []
    },
    {
      "alertId": 2007,
      "title": "1071-1",
      "template": "درخواست نام برای کلاف با شماره @1 ارسال گردید",
      "prm1Title": null,
      "prm2Title": null,
      "prm3Title": null,
      "isSound": false,
      "isPopup": false,
      "isActvie": true,
      "isPublic": false,
      "alertTypeFk": 1,
      "alertTypeFkNavigation": null,
      "alertLog": [],
      "connectUgAlert": []
    },
    {
      "alertId": 2008,
      "title": "1071-2",
      "template": "کلاف با شماره @1 یافت نشد",
      "prm1Title": null,
      "prm2Title": null,
      "prm3Title": null,
      "isSound": false,
      "isPopup": false,
      "isActvie": true,
      "isPublic": false,
      "alertTypeFk": 1,
      "alertTypeFkNavigation": null,
      "alertLog": [],
      "connectUgAlert": []
    }
  ]

  constructor() { }

  async readAlerts() {
    return await this.ALERT_LIST
  }

  async getAlertLogList() {
    return await this.EXAMPLE_DATA
  }
}

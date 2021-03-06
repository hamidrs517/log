import { Injectable } from '@angular/core';
import { IAlertLogItem } from "../models/alert-log-item";
import { BehaviorSubject, Observable } from 'rxjs';
import { IAlertLogFilter } from '../models/alert-log-filter';
import { IAlertLogList } from '../models/alert-log-list';
@Injectable({
  providedIn: 'root'
})
export class AlertLogService {

  EXAMPLE_DATA: IAlertLogItem[] = [
    {
      "alertLogId": 99158,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 15:40:15",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1000",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99157,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 15:15:06",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1000",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99156,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 15:14:49",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1000",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99155,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 13:28:24",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1000",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99154,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 13:27:18",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1001",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99153,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 13:25:26",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1000",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99152,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 13:24:27",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1000",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99151,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 12:56:52",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1001",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99150,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 12:51:12",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1000",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99149,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 11:02:04",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1000",
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
      "alertId": "1000",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99147,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 09:36:50",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1000",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99146,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-23 08:47:08",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1002",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99145,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-22 23:58:54",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1002",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99144,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-22 23:56:46",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1002",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    },
    {
      "alertLogId": 99143,
      "logText": " عملیات افزودن با موفقیت انجام شد.",
      "logDate": "2020-06-22 16:10:29",
      "prm1Value": null,
      "prm2Value": null,
      "prm3Value": null,
      "alertId": "1002",
      "title": "GENERAL",
      "sound": true,
      "popup": false,
      "type": 1
    }
  ]

  ALERT_LIST = [
    {
      "alertId": "1002",
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
      "alertId": "2007",
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
      "alertId": "2008",
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

  alertTypeList = [
    { name: "", value: undefined },
    { name: "INFO", value: 1 },
    { name: "WARNING", value: 2 },
    { name: "DANGER", value: 3 },
    { name: "SUCCESS", value: 4 }
  ];

  datePeriod = [
    { name: "", value: 0 },
    { name: "Last Hour", value: 1 },
    { name: "Last 12 Hours", value: 2 },
    { name: "Last Day", value: 3 }
  ];

  latestFilterData: IAlertLogFilter
  private _searchData: BehaviorSubject<IAlertLogFilter> = new BehaviorSubject<IAlertLogFilter>(null)
  searchData$: Observable<IAlertLogFilter> = this._searchData.asObservable()
  alertLogList: IAlertLogList

  public setFilterData(alertLogFilter: IAlertLogFilter) {
    this._searchData.next(alertLogFilter);
  }

  constructor() {
    this.searchData$.subscribe(res => {
      let emitedfilterData = res as IAlertLogFilter
      this.latestFilterData = { ...this.latestFilterData, ...emitedfilterData }

      this.getAlertLogList(this.latestFilterData).then((res: IAlertLogList) => {
        this.alertLogList = res
      }).catch(err => {
        console.error(err)
      })
    })
  }

  async readAlerts() {
    return await this.ALERT_LIST
  }

  async readDatePeriods() {
    return await this.datePeriod
  }

  async readAlertTypeList() {
    return await this.alertTypeList
  }

  async getAlertLogList(data) {
    console.log("fiter data in service:", data)
    this.alertLogList = {
      alertLogItems: this.EXAMPLE_DATA,
      total: this.EXAMPLE_DATA.length,
      pageSize: 10,
      pageNumber: 1,
      lastPage: this.EXAMPLE_DATA.length / 10,
    }

    return await this.alertLogList
  }
}

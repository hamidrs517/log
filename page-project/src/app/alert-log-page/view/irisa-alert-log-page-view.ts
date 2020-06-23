import { Component, OnInit } from '@angular/core';
import { IAlertLogFilter } from 'src/app/models/alert-log-filter';

@Component({
  selector: 'irisa-alert-log-page-view',
  templateUrl: './irisa-alert-log-page-view.html',
  styleUrls: ['./irisa-alert-log-page-view.scss']
})
export class IrisaAlertLogPageView implements OnInit {
  searchData: IAlertLogFilter

  ngOnInit() { }

  onSearchData(event: IAlertLogFilter) {
    this.searchData = event
  }
}


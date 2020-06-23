import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { IAlertLogItem } from 'src/app/models/alert-log-item';

@Component({
  selector: 'irisa-alert-log-table-view',
  templateUrl: './irisa-alert-log-table-view.html',
  styleUrls: ['./irisa-alert-log-table-view.scss']
})
export class IrisaAlertLogTableView implements AfterViewInit, OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<IAlertLogItem>;
  // @Input('data-source') dataSource
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'alertId', 'logText', 'logDate', 'title'
  ];

  @Input('alert-log-list') alertLogList: IAlertLogItem[];

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {

  }
}

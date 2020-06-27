import { AfterViewInit, Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IAlertLogItem } from 'src/app/models/alert-log-item';
import { BreakpointObserver, Breakpoints, MediaMatcher, BreakpointState } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { AlertLogFilterDialogPresenter } from '../../alert-log-filter-dialog/alert-log-filter-dialog-presenter';

@Component({
  selector: 'alert-log-table2-view',
  templateUrl: './alert-log-table2-view.html',
  styleUrls: ['./alert-log-table2-view.scss']
})
export class AlertLogTable2View implements AfterViewInit, OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<IAlertLogItem>;
  // @Input('data-source') dataSource
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'alertId', 'logText', 'logDate', 'title', 'operation'
  ];

  @Input('alert-log-list') alertLogList: IAlertLogItem[];

  @Output('get-log-list') getLogList: EventEmitter<PageEvent> = new EventEmitter<PageEvent>()

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() { }

  showDetails(rowData: IAlertLogItem): void {
    const dialogRef = this.dialog.open(AlertLogFilterDialogPresenter, {
      width: 'auto',
      data: { alertLogItem: rowData },
      panelClass: ['custom-dialog'],
      backdropClass: "dialog-back-drop"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

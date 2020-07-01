import { AfterViewInit, Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { IAlertLogItem } from 'src/app/models/alert-log-item';
import { MatDialog } from '@angular/material/dialog';
import { AlertLogFilterDialogPresenter } from '../../alert-log-filter-dialog/alert-log-filter-dialog-presenter';
import { IAlertLogList } from 'src/app/models/alert-log-list';

@Component({
  selector: 'alert-log-table2-view',
  templateUrl: './alert-log-table2-view.html',
  styleUrls: ['./alert-log-table2-view.scss']
})
export class AlertLogTable2View implements AfterViewInit, OnInit {

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input('alert-log-list') alertLogList: IAlertLogList;
  columns = [
    { columnDef: 'alertId', header: 'Alert Id', cell: (element: any) => `${element.alertId}` },
    { columnDef: 'logText', header: 'Log Text', cell: (element: any) => `${element.logText}` },
    { columnDef: 'logDate', header: 'Log Date', cell: (element: any) => `${element.logDate}` },
    { columnDef: 'title', header: 'Title', cell: (element: any) => `${element.title}` },
    { columnDef: 'operation', header: 'operation', cell: (element: any) => `` },
  ];

  @Output('get-log-list') getLogList: EventEmitter<PageEvent> = new EventEmitter<PageEvent>()

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  ngAfterViewInit() {
    this.getLogList.emit({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize
    } as PageEvent)
  }

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

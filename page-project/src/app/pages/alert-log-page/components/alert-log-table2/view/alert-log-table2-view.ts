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
    'alertId', 'logText', 'logDate', 'title'
  ];

  @Input('alert-log-list') alertLogList: IAlertLogItem[];

  @Output('get-log-list') getLogList: EventEmitter<PageEvent> = new EventEmitter<PageEvent>()

  constructor(
    private breakpointObserver: BreakpointObserver,
    private mediaMatcher: MediaMatcher,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const layoutChanges = this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.Tablet,
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.Large,
      Breakpoints.XSmall,
      Breakpoints.Web,
      Breakpoints.WebLandscape,
      Breakpoints.WebPortrait,
      Breakpoints.Small,
      Breakpoints.Medium,
      "(min-width: 320px) and (max-width: 599.99px)",
      "(max-width: 320.99px)",
    ]);

    // layoutChanges.subscribe((result: BreakpointState) => {
    //   console.warn(result.breakpoints)

    //   if (result.breakpoints["(min-width: 320px) and (max-width: 599.99px)"]) {
    //     this.displayedColumns = [
    //       'alertId', 'logDate', 'operation'
    //     ];
    //   } else if (result.breakpoints["(max-width: 320.99px)"]) {
    //     this.displayedColumns = [
    //       'alertId', 'operation'
    //     ];
    //   } else if (result.breakpoints["(max-width: 599.99px) and (orientation: portrait)"]) {

    //     this.displayedColumns = [
    //       'alertId', 'logText', 'logDate', 'operation'
    //     ];

    //   } else if (result.breakpoints["(max-width: 959.99px) and (orientation: landscape)"]) {
    //     this.displayedColumns = [
    //       'alertId', 'logText', 'logDate', 'operation'
    //     ];

    //   } else if (result.breakpoints["(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)"]) {

    //   } else if (result.breakpoints["(min-width: 600px) and (max-width: 959.99px)"]) {
    //     this.displayedColumns = [
    //       'alertId', 'logText', 'logDate', 'title'
    //     ];

    //   } else if (result.breakpoints["(min-width: 840px) and (orientation: portrait)"]) {

    //     this.displayedColumns = [
    //       'alertId', 'logText', 'logDate', 'title'
    //     ];

    //   } else if (result.breakpoints["(min-width: 960px) and (max-width: 1279.99px)"]) {

    //     this.displayedColumns = [
    //       'alertId', 'logText', 'logDate', 'title'
    //     ];

    //   } else if (result.breakpoints["(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)"]) {

    //     this.displayedColumns = [
    //       'alertId', 'logText', 'logDate', 'title'
    //     ];

    //   } else if (result.breakpoints["(min-width: 1280px) and (max-width: 1919.99px)"]) {

    //     this.displayedColumns = [
    //       'alertId', 'logText', 'logDate', 'title'
    //     ];

    //   } else if (result.breakpoints["(min-width: 1280px) and (orientation: landscape)"]) {

    //     this.displayedColumns = [
    //       'alertId', 'logText', 'logDate', 'title'
    //     ];

    //   }

    // });


  }

  ngAfterViewInit() {

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

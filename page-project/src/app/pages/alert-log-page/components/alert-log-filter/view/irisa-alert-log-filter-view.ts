import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { IAlert } from 'src/app/models/alert';

@Component({
  selector: 'irisa-alert-log-filter-view',
  templateUrl: './irisa-alert-log-filter-view.html',
  styleUrls: ['./irisa-alert-log-filter-view.scss']
})
export class IrisaAlertLogfilterView implements OnInit {

  // @Input('alert-filter') alertFilter: IAlertLogFilter
  @Input('alert-list') alertList: IAlert[]

  @Output('on-search-data') onSearchData: EventEmitter<IAlert> = new EventEmitter<IAlert>()
  @Input('alert-type-list') alertTypeList
  @Input('date-periods') datePeriods

  filteredAlertList$: Observable<IAlert[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredAlerts: IAlert[];
  selectedAlerts: IAlert[] = [];
  visible = true;
  selectable = true;
  removable = true;

  @ViewChild('autoCode') matAutocompleteCode: MatAutocomplete;
  @ViewChild('autoTitle') matAutocompleteTitle: MatAutocomplete;
  @ViewChild('itemInput', { static: false }) itemInput: ElementRef<HTMLInputElement>;
  // @ViewChild('autoCode', { static: false }) matAutocompleteCode: MatAutocomplete;
  // @ViewChild('autoName', { static: false }) matAutocompleteName: MatAutocomplete;

  panelOpenState = false;
  filterForm: FormGroup

  // get pageNumber() { return this.filterForm.get('pageNumber'); }
  // get pageSize() { return this.filterForm.get('pageSize'); }
  get alerts() { return this.filterForm.get('alerts'); }
  get alertType() { return this.filterForm.get('alertType'); }
  get prm1() { return this.filterForm.get('prm1'); }
  get prm2() { return this.filterForm.get('prm2'); }
  get prm3() { return this.filterForm.get('prm3'); }
  get bodyPhrase() { return this.filterForm.get('bodyPhrase'); }
  get fromDate() { return this.filterForm.get('fromDate'); }
  get toDate() { return this.filterForm.get('toDate'); }
  // get f() { return this.filterForm.controls; }

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.error(this.filterForm)
    this.onSearchData.emit(
      this.filterForm.getRawValue()
    );
    let el = document.getElementById('tableResult');
    el.scrollIntoView({ behavior: "smooth" });
  }

  initForm(): void {
    this.filterForm = this.fb.group({
      alerts: [null],
      alertType: [null],
      prm1: [null],
      prm2: [null],
      prm3: [null],
      bodyPhrase: [null],
      fromDate: [null],
      toDate: [null]
    });
  }

  resetForm() {
    this.selectedAlerts = []
    this.alerts.setValue([])
    this.alertType.setValue(null)
    this.prm1.setValue(null)
    this.prm2.setValue(null)
    this.prm3.setValue(null)
    this.fromDate.setValue(null)
    this.toDate.setValue(null)
  }


  ngOnInit() {
    this.initForm()
    this.filteredAlertList$ = this.alerts.valueChanges
      .pipe(
        map(value => {
          console.warn("typeof value", typeof value)
          return (typeof value === 'string' || typeof value === 'number') ? value : value.alertId
        }),
        map((value) => {
          if (typeof value === 'string') {
            return value ? this._filterByName(value) : (this.alertList ? this.alertList.slice() : [])
          } else if (typeof value === 'number') {
            return value ? this._filterByCode(value) : (this.alertList ? this.alertList.slice() : [])
          }
        })
      );
  }

  private _filterByCode(value): IAlert[] {
    const filterValue = value;
    return this.alertList.filter(alert => alert.alertId.indexOf(filterValue) === 0);
  }

  private _filterByName(value): IAlert[] {
    const filterValue = value.toLowerCase();
    return this.alertList.filter(alert => alert.title.toLowerCase().indexOf(filterValue) === 0);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    console.warn("add", event)
    // Add our item
    if ((value || '').trim()) {
      // this.selectedAlerts.push(
      //   value,
      // )
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.alerts.setValue(null);
  }

  remove(alert: IAlert): void {
    const index = this.selectedAlerts.findIndex(alt => alt.alertId === alert.alertId);
    if (index >= 0) {
      this.selectedAlerts.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.warn("event", event)
    const selectedAlert = this.alertList.find(altList => altList.alertId === event.option.value)
    this.selectedAlerts.push(selectedAlert);
    this.itemInput.nativeElement.value = '';
    const selectedAlertIds = this.selectedAlerts.map(alt => alt.alertId)
    this.alerts.setValue(selectedAlertIds);
  }


  displayWithCode(alert: IAlert): string {
    return alert && alert.alertId ? alert.alertId : '';
  }


  displayWithTitle(alert: IAlert): string {
    return alert && alert.title ? alert.title : '';
  }

}

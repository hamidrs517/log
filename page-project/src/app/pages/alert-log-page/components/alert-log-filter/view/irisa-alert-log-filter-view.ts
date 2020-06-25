import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IAlertLogFilter } from 'src/app/models/alert-log-filter';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, switchMap, map } from 'rxjs/operators';
import { IAlertLogItem } from 'src/app/models/alert-log-item';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'irisa-alert-log-filter-view',
  templateUrl: './irisa-alert-log-filter-view.html',
  styleUrls: ['./irisa-alert-log-filter-view.scss']
})
export class IrisaAlertLogfilterView implements OnInit {

  // @Input('alert-filter') alertFilter: IAlertLogFilter
  @Input('alert-list') alertList$: Observable<IAlertLogItem[]>;
  @Output('on-search-data') onSearchData: EventEmitter<IAlertLogFilter> = new EventEmitter<IAlertLogFilter>()
  @Input('alert-type-list') alertTypeList
  @Input('date-periods') datePeriods

  filteredAlertList$: Observable<IAlertLogItem[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredItems: IAlertLogItem[];
  items: string[] = [];
  visible = true;
  selectable = true;
  removable = true;

  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;


  filterForm = this.fb.group({
    alerts: [[]],
    alertType: [null],
    prm1: [null],
    prm2: [null],
    prm3: [null],
    bodyPhrase: [null],
    fromDate: [null],
    toDate: [null]
  });

  get pageNumber() { return this.filterForm.get('pageNumber'); }
  get pageSize() { return this.filterForm.get('pageSize'); }
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
    let el=document.getElementById('tableResult');
    el.scrollIntoView({behavior:"smooth"});
  }

  ngOnInit() {
    this.alerts.valueChanges.subscribe(res => {
      this.filteredAlertList$ = this.filterAlertList(res)
    })
  }

  private filterAlertList(value: string) {
    let filterValue = '';
    if (value.length > 0) {
      filterValue = value
      return this.alertList$.pipe(
        map(
          alerts => {
            console.info("alerts", alerts)
            return alerts.filter(alert => alert.alertId.toLowerCase().includes(filterValue))
          }
        )
      );
    } else {
      return this.alertList$;
    }
  }

  displayFn(alert?: any): string {
    return alert ? alert.name : '';
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our item
    if ((value || '').trim()) {
      this.alertList$.pipe(
        map(alert => {
          alert.push(
            {
              alertId: value.trim(),
            } as IAlertLogItem
          )
        })
      )

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.alerts.setValue([]);
  }

  remove(item: string): void {
    const index = this.items.indexOf(item);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.warn("event", event)
    this.items.push(event.option.value);
    this.itemInput.nativeElement.value = '';
    this.alerts.setValue(this.items);
  }
}

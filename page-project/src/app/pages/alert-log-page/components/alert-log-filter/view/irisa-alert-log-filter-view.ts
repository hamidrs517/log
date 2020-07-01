import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IAlert } from 'src/app/models/alert';
import { IAlertLogFilter } from 'src/app/models/alert-log-filter';
import { Observable, of } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';
import { async } from '@angular/core/testing';

@Component({
  selector: 'irisa-alert-log-filter-view',
  templateUrl: './irisa-alert-log-filter-view.html',
  styleUrls: ['./irisa-alert-log-filter-view.scss'],
})
export class IrisaAlertLogfilterView implements OnInit {


  @Input('alert-list') alertList: IAlert[]

  @Output('on-search-data') onSearchData: EventEmitter<IAlertLogFilter> = new EventEmitter<IAlertLogFilter>()
  @Input('alert-type-list') alertTypeList
  @Input('date-periods') datePeriods

  selectedAlerts: IAlert[] = [];
  alertsData: IAlert[] = [];

  // @ViewChild('itemInput', { static: false }) itemInput: ElementRef<HTMLInputElement>;

  panelOpenState = false;
  filterForm: FormGroup

  // get pageNumber() { return this.filterForm.get('pageNumber'); }
  // get pageSize() { return this.filterForm.get('pageSize'); }
  get alerts() { return this.filterForm.get('alerts'); }
  get alertType() { return this.filterForm.get('alertType'); }
  get datePeriod() { return this.filterForm.get('datePeriod'); }
  get prm1() { return this.filterForm.get('prm1'); }
  get prm2() { return this.filterForm.get('prm2'); }
  get prm3() { return this.filterForm.get('prm3'); }
  get bodyPhrase() { return this.filterForm.get('bodyPhrase'); }
  get fromDate() { return this.filterForm.get('fromDate'); }
  get toDate() { return this.filterForm.get('toDate'); }

  constructor(private fb: FormBuilder) {
    // this.alertIdCtrl.valueChanges.subscribe(alert => {
    //   console.log(alert);
    //   this.filteredAlerts = alert ? of(this._filter(alert)) : of(this.alertList.filter(this.isNotSelected))
    // })

    this.filteredAlerts = this.alertIdCtrl.valueChanges.pipe(
      startWith(null),
      map((alert : string | null) => {
        if(typeof alert==="number"){
          return alert ? this._filterAlertId(alert) : this.alertList
        }
        else{
          return alert ? this._filterAlertTitle(alert) : this.alertList
        }
      })
    );
  }

  ngOnInit() {
    this.initForm()
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
      toDate: [null],
      datePeriod: [null]
    });
  }

  onSubmit() {
    console.error(this.filterForm)
    this.onSearchData.emit(
      this.filterForm.getRawValue()
    );
    let el = document.getElementById('tableResult');
    el.scrollIntoView({ behavior: "smooth" });
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

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  alertIdCtrl = new FormControl();
  filteredAlerts: Observable<IAlert[]>;

  @ViewChild('alertInput') alertInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  add(event: MatChipInputEvent, caller:string): void {
    console.log("add");
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      var index
      if(caller=='alertid'){
        index = this.alertList.findIndex(x => x.alertId == value.trim());
      }
      else if(caller==='alerttTitle'){
        index = this.alertList.findIndex(x => x.title == value.trim());
      }
      if (index >= 0) {
        this.selectedAlerts.push(this.alertList[index]);
        this.alertList.splice(index, 1);
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.alertIdCtrl.setValue(null);
  }

  remove(alert: IAlert): void {
    console.log("remove");
    const index = this.selectedAlerts.indexOf(alert);
    if (index >= 0) {
      this.alertList.push(this.selectedAlerts[index])
      this.selectedAlerts.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent,caller:string): void {
    console.log("selected");
    var index
      if(caller=='alertid'){
        index = this.alertList.findIndex(x => x.alertId === event.option.viewValue);
      }
      else if(caller==='alerttTitle'){
        index = this.alertList.findIndex(x => x.title === event.option.viewValue);
      }
    if (index >= 0) {
      this.selectedAlerts.push(this.alertList[index]);
      this.alertList.splice(index, 1);
    }
    this.alertInput.nativeElement.value = '';
    this.alertIdCtrl.setValue(null);
  }

  private _filterAlertId(value: number): IAlert[] {
    console.log("filtered");
    const filterValue = value;
    return this.alertList.filter(x => x.alertId.toString().indexOf(filterValue.toString()) === 0);
  }
  private _filterAlertTitle(value: string): IAlert[] {
    console.log("filtered");
    const filterValue = value.toLowerCase();
    return this.alertList.filter(x => x.title.toLowerCase().indexOf(filterValue) === 0);
  }

  // isSelected(element: IAlert, index, array) {
  //   return element.selected
  // }

  // isNotSelected(element: IAlert, index, array) {
  //   return (!element.selected)
  // }

  refreshFilteredAlerts() {
    console.log("refresh");
    this.filteredAlerts = of(this.alertList);
  }
}

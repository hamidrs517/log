import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { IrisaAlertLogPageView } from './alert-log-page/view/irisa-alert-log-page-view';
import { IrisaAlertLogPagePresenter } from './alert-log-page/irisa-alert-log-page-presenter';
import { IrisaAlertLogTablePresenter } from './alert-log-page/components/alert-log-table/irisa-alert-log-table-presenter';
import { IrisaAlertLogTableView } from './alert-log-page/components/alert-log-table/view/irisa-alert-log-table-view';
import { IrisaAlertLogFilterPresenter } from './alert-log-page/components/alert-log-filter/irisa-alert-log-filter-presenter';
import { IrisaAlertLogfilterView } from './alert-log-page/components/alert-log-filter/view/irisa-alert-log-filter-view';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    IrisaAlertLogTablePresenter,
    IrisaAlertLogTableView,
    IrisaAlertLogPageView,
    IrisaAlertLogPagePresenter,
    IrisaAlertLogfilterView,
    IrisaAlertLogFilterPresenter,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatMomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

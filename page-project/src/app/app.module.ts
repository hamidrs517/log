import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { IrisaAlertLogPageView } from './pages/alert-log-page/view/irisa-alert-log-page-view';
import { IrisaAlertLogPagePresenter } from './pages/alert-log-page/irisa-alert-log-page-presenter';
import { IrisaAlertLogFilterPresenter } from './pages/alert-log-page/components/alert-log-filter/irisa-alert-log-filter-presenter';
import { IrisaAlertLogfilterView } from './pages/alert-log-page/components/alert-log-filter/view/irisa-alert-log-filter-view';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { AlertLogFilterDialogView } from './pages/alert-log-page/components/alert-log-filter-dialog/view/alert-log-filter-dialog-view';
import { AlertLogFilterDialogPresenter } from './pages/alert-log-page/components/alert-log-filter-dialog/alert-log-filter-dialog-presenter';
import { AlertLogTable2Presenter } from './pages/alert-log-page/components/alert-log-table2/alert-log-table2-presenter';
import { AlertLogTable2View } from './pages/alert-log-page/components/alert-log-table2/view/alert-log-table2-view';

@NgModule({
  declarations: [
    AppComponent,
      IrisaAlertLogPageView,
    IrisaAlertLogPagePresenter,
    IrisaAlertLogfilterView,
    IrisaAlertLogFilterPresenter,
    AlertLogFilterDialogView,
    AlertLogFilterDialogPresenter,
    AlertLogTable2Presenter,
    AlertLogTable2View
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
    MatDividerModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertLogFilterDialogPresenter
  ]
})
export class AppModule { }

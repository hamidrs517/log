import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IrisaAlertLogPagePresenter } from './alert-log-page/irisa-alert-log-page-presenter';


const routes: Routes = [
  { path: 'alert-log-list', component: IrisaAlertLogPagePresenter },
  { path: '', redirectTo: 'alert-log-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

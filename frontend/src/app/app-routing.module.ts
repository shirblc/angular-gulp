import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPage } from './components/errorPage/errorPage.component';
import { Sample } from './components/sample/sample.component';

const routes: Routes = [
  { path: '', component: Sample },
  { path: '**', component: ErrorPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

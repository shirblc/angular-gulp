import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { ErrorPage } from './components/errorPage/errorPage.component';
import { Sample } from './components/sample/sample.component';
import { SampleService } from './services/sample.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ErrorPage,
    Sample
  ],
  providers: [
    SampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

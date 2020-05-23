import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { ErrorPage } from './components/errorPage/errorPage.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ErrorPage
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

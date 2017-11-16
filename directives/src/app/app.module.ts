import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Mydatalist } from './datalist.component';
import { Showthis } from './showthis.component';


@NgModule({
  declarations: [
    AppComponent,
    Mydatalist,
    Showthis
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

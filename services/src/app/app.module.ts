import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CarService } from './car.service';
import { Carlist } from './carlist.component';

@NgModule({
  declarations: [
    AppComponent,
    Carlist
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

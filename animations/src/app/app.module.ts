import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent} from './mymenu.component';
import { MyAnimation} from './menucontainer.component';

//Source:https://blog.thecodecampus.de/angular-2-animate-creating-sliding-side-navigation/

@NgModule({
  declarations: [
    AppComponent,
	MenuComponent,
	MyAnimation
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

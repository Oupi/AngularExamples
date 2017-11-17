import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormContainer } from './container.component';
import { ComplexForm } from './complexform.component';
import { FormGroup } from '@angular/forms/src/model';


@NgModule({
  declarations: [
    AppComponent,
    FormContainer,
    ComplexForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

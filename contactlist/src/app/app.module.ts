import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { ContactForm } from "./contactform.component";
import { ContactList } from "./contactlist.component";
import { ContactService } from "./contact.service";

const routes: Routes = [
  { path: "", redirectTo: "/list", pathMatch: "full" },
  { path: "list", component: ContactList },
  { path: "form", component: ContactForm }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactForm,
    ContactList,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

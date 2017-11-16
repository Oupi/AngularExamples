import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Home } from './home.component';
import { About } from './about.component';
import { ErrorComponent } from './errorComponent.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "Home", component: Home },
  { path: "About", component: About },
  { path: "Error", component: ErrorComponent },
  { path: "**", redirectTo: "/Error", pathMatch: "full"}
];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    About,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

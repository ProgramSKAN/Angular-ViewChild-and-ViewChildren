import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,

    ChildComponent,

    DateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

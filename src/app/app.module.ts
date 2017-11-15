import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';

import {DrugiModule} from './drugi/drugi.module'; 



@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    DrugiModule

  ],
  exports: [
  	DrugiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

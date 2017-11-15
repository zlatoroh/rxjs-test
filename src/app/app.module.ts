import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';

import {DrugiModule} from './drugi/drugi.module'; 
import {ServisModule} from './servis/servis.module'; 



@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    DrugiModule,
    ServisModule

  ],
  exports: [
  	DrugiModule,
  	ServisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

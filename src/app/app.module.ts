import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { NgForm } from '@angular/forms';


import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarCardComponent } from './car-card/car-card.component';

import { CarsService } from './services/cars.service';
import { AddListFormComponent } from './add-list-form/add-list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarCardComponent,
    AddListFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

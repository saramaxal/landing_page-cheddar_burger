import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CardComponent } from './card.component';

// import { SomeDataService } from './services/some-data-service.service';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent, CardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // SomeDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

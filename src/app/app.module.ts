import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CSSCarouselComponent} from './carousel.component';

@NgModule({
  declarations: [
    AppComponent,CSSCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

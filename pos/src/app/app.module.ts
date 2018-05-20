import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeccionChanComponent } from './seccion-chan/seccion-chan.component';

@NgModule({
  declarations: [
    AppComponent,
    SeccionChanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

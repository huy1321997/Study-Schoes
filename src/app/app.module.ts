import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_CONTAINER_MODULES } from './containers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...APP_CONTAINER_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

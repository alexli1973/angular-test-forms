import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SystemModule} from './system/system.module';
import { EnterComponent } from './enter/enter.component';
import {CounterService} from './shared/services/counter.service';
import {ItemsService} from './shared/services/items.service';

@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SystemModule,
  ],
  providers: [CounterService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

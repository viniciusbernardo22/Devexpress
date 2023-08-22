import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxSchedulerModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CalendarioService } from './calendario/calendario.service';

@NgModule({
  declarations: [AppComponent, CalendarioComponent],
  imports: [BrowserModule, AppRoutingModule, DxSchedulerModule],
  providers: [CalendarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}

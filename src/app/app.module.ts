import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgIconsModule } from '@ng-icons/core';
import { matMenu as menu, matClose as close } from '@ng-icons/material-icons/baseline'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ menu, close })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

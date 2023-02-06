import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuideLandingComponent } from './guide-landing/guide-landing.component';
import { GuideModule } from './guide/guide.module';

@NgModule({
  declarations: [
    AppComponent,
    GuideLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GuideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

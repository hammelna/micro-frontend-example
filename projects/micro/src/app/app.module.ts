import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MicroPageModule } from './micro-pages/micro-page.module';
import { NavBarComponent } from './nav/nav-bar.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    MicroPageModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

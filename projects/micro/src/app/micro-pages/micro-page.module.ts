import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MICRO_PAGE_ROUTES } from './micro-page.routes'
import { MicroPageComponent } from './micro-page/micro-page.component';
import { SecondaryPageComponent } from './secondary-page/secondary-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MICRO_PAGE_ROUTES)
  ],
  declarations: [
    MicroPageComponent,
    SecondaryPageComponent
  ]
})
export class MicroPageModule { }

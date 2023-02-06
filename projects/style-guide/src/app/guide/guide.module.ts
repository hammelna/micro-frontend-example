import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GuideComponent } from './guide.component';
import { GUIDE_ROUTES } from './guide.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GUIDE_ROUTES)
  ],
  declarations: [
    GuideComponent
  ]
})
export class GuideModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideLandingComponent } from './guide-landing/guide-landing.component';

const routes: Routes = [
  { path: '', component: GuideLandingComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from "@angular/router";
import { MicroPageComponent } from "./micro-page/micro-page.component";
import { SecondaryPageComponent } from "./secondary-page/secondary-page.component";

export const MICRO_PAGE_ROUTES: Routes = [
    {
      path: 'micro-page',
      component: MicroPageComponent
    },
    {
      path: 'secondary-page',
      component: SecondaryPageComponent
    }
];
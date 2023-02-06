import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'micro',
      loadChildren: () => loadRemoteModule({
        type: 'manifest',
        remoteName: 'micro',
        exposedModule: './Module'
      })
      .then(m => m.MicroPageModule)
    },
    //   loadChildren: () => import('micro/Module').then(m => m.MicroPageModule)
    // },
    {
        path: 'style-guide',
        loadChildren: () => loadRemoteModule({
          type: 'manifest',
          remoteName: 'styleGuide',
          exposedModule: './Module'
        })
        .then(m => m.GuideModule)
      },
    // {
    //   path: 'style-guide',
    //   loadChildren: () => import('style/Module').then(m => m.GuideModule)
    // },
    {
        path: '**',
        component: HomeComponent
      },
];
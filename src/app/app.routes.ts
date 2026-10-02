import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'not-found',
    title: 'Pagina no encontrada',
    data: {isModule: false},
    loadComponent: () => import('./shared/ui/pages/not-found/not-found.page')
  },
  {
    path: '',
    title: '',
    data: {isModule: true},
    loadComponent: () => import('./shared/ui/pages/main/main.page').then(p => p.MainPage),
    children: [
      {
        path: 'sayajins',
        title: 'Sayajins',
        data: { isModule: true },
        loadChildren: () => import('./business/dragonball/sayajins.routes').then(r => r.sayajinsRoutes)
      },
      {
        path: '',
        data: { isModule: false },
        redirectTo: 'sayajins',
        pathMatch: 'full'
      },
      {
        path: '**',
        title: 'Pagina no encontrada',
        data: {isModule: false},
        pathMatch: 'prefix',
        loadComponent: () => import('./shared/ui/pages/not-found/not-found.page')
      }
    ]
  }
];

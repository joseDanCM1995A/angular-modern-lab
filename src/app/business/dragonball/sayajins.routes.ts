import { Routes } from "@angular/router";

export const sayajinsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./ui/pages/home/home.page')
  },
  {
    path: ':id',
    loadComponent: () => import('./ui/pages/sayajin-detail/sayajin-detail.page')
  }
]

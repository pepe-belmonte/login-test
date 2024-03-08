import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
    import('./home/presentation/home-view/home-view.component').then(
      (m) => m.HomeViewComponent
    )
  },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
    import('./login/presentation/login-view/login-view.component').then(
      (m) => m.LoginViewComponent
    )
  },

];

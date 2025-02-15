import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        title: 'Angular 19 starter repos',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path:'login',
        title: 'log in component',
        loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent)
    },
];

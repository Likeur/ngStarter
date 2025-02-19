import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        title: 'Angular starter repos',
        loadComponent: () => import('./pages/landing-page/landing-page.component').then(m => m.LandingPageComponent)
    },
    {
        path:'login',
        title: 'log in component',
        loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent)
    },
];

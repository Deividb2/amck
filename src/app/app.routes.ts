import { Routes } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'AMCK Planejados'
    },
    {
        path: 'leads',
        loadComponent: () => import('./pages/leads/leads.component').then((page) => page.LeadsComponent),
        title: 'Captura de Leads'
    },
    {
        path: 'terms',
        loadComponent: () => import('./pages/terms/terms.component').then((page) => page.TermsComponent),
        title: 'Termos e condições'
    },
    {
        path: '**',
        loadComponent: () => import('./pages/error/error.component').then((page) => page.ErrorComponent),
        title: 'Erro | Página não encontrada'
    }
];

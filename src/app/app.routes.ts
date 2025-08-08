import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/client/client.routes').then(m => m.CLIENT_ROUTES)
    },
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {
        path: 'politica',
        loadChildren: () => import('./pages/Policy/policy.routes').then(m => m.POLICY_ROUTES) 
    },
    {
        path: '**',
        loadComponent: () => import('./pages/error/error.component').then((page) => page.ErrorComponent),
        title: 'Erro | Página não encontrada'
    }
];

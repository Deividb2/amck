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
        path: 'terms',
        component: TermsComponent,
        title: 'Termos e condições'
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

import { Routes } from "@angular/router";
import { TermsComponent } from "./terms/terms.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

export const POLICY_ROUTES: Routes = [
    {
        path: 'termos',
        component: TermsComponent,
        title: 'Termos de uso | AMCK Planejados'
    },
    {
        path: 'privacidade',
        component: PrivacyPolicyComponent,
        title: 'Política de Privacidade | AMCK Planejados'
    }
]
import { Routes } from "@angular/router";

// Layout
import { LayoutComponent } from "./layout.component";

// Pages
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ServicesComponent } from "./services/services.component";
import { LivingComponent } from "./environments/living/living.component";
import { BathroomComponent } from "./environments/bathroom/bathroom.component";
import { DormitoryComponent } from "./environments/dormitory/dormitory.component";
import { KitchenComponent } from "./environments/kitchen/kitchen.component";
import { LeadsComponent } from "./leads/leads.component";

export const CLIENT_ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                title: 'AMCK Planejados | Móveis sob medida RJ'
            },
            {
                path: 'contato',
                component: ContactComponent,
                title: 'AMCK Planejados | Contato'
            },
            {
                path: 'servicos',
                component: ServicesComponent,
                title: 'AMCK Planejados | Nossos Serviços'
            },
            {
                path: 'salas',
                component: LivingComponent,
                title: 'AMCK Planejados | Salas'
            },
            {
                path: 'quartos',
                component: DormitoryComponent,
                title: 'AMCK Planejados | Quartos'
            },
            {
                path: 'cozinhas',
                component: KitchenComponent,
                title: 'AMCK Planejados | Cozinhas'
            },
            {
                path: 'banheiros',
                component: BathroomComponent,
                title: 'AMCK Planejados | Banheiros'
            },
            {
                path: 'desconto',
                component: LeadsComponent,
                title: 'Inscreva-se agora e receba até 20% de desconto na primeira compra'
            }
        ]
    }
]
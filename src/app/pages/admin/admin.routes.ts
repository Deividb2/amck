import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LayoutComponent } from "./layout.component";
import { HomeComponent } from "./home/home.component";

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
                title: "Acesso restrito"
            },
            {
                path: '',
                component: HomeComponent,
                title: 'Painel administrativo'
            }
        ]
    }
]
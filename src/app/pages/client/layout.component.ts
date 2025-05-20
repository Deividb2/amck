import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../components/client/header/header.component";

@Component({
    standalone: true,
    selector: 'client-layout',
    imports: [RouterOutlet, HeaderComponent],
    template: `
        <app-header />
        <router-outlet />
    `
})

export class LayoutComponent {}
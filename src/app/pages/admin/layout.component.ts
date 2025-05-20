import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    selector: 'admin-layout',
    imports: [RouterOutlet],
    template: `
        <router-outlet />
    `
})

export class LayoutComponent {}
import { Component } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core'
import { matMenu as menu, matClose as close } from '@ng-icons/material-icons/baseline'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ menu, close })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  menuIcon: string = 'menu'
  menu: boolean = false

  hendleMenu() {
    this.menu = !this.menu
    this.menu ? this.menuIcon = 'close' : this.menuIcon = 'menu'
  }

}

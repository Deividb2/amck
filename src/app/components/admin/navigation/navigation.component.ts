import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matMenu, matClose } from '@ng-icons/material-icons/baseline'

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matMenu, matClose })],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  menu: boolean = false
  menuIcon: string = 'matMenu'
  
  hendleMenu() {
    this.menu = !this.menu
    this.menu ? this.menuIcon = "matClose" : this.menuIcon = "matMenu"
  }
}
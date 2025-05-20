import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core'
import { 
    matMenu as menu, matClose as close, 
    matKeyboardArrowDown as arrowDown, matKeyboardArrowUp as arrowTop 
} from '@ng-icons/material-icons/baseline'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIcon, RouterLink],
  providers: [provideIcons({ menu, close, arrowDown, arrowTop })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  menuIcon: string = 'menu'
  dropdownIcon: string = 'arrowDown'

  menu: boolean = false
  dropdown: boolean = false

  hendleMenu() {
    this.menu = !this.menu
    this.menu ? this.menuIcon = 'close' : this.menuIcon = 'menu'
  }

  hendleDropdown() {
    this.dropdown = !this.dropdown
    this.dropdown ? this.dropdownIcon = 'arrowTop' : this.dropdownIcon = 'arrowDown'
  }

}

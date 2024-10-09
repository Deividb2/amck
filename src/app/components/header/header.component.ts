import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matMenu as menu, matClose as close } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NgIconComponent
  ],
  viewProviders: [provideIcons({ menu, close })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {
  hendleMenuIcon: boolean = false
  menuIcon: string = 'menu'

  hendleMenu() {
    this.hendleMenuIcon = !this.hendleMenuIcon
    this.hendleMenuIcon ? this.menuIcon = 'close' : this.menuIcon = 'menu'
  }
}

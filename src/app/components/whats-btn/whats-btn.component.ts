import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

// Icons
import { matWhatsapp as whats } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-whats-btn',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({ whats })],
  templateUrl: './whats-btn.component.html',
  styleUrl: './whats-btn.component.scss'
})
export class WhatsBtnComponent {

}

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
  message: string = "Olá,%20gostaria%20realizar%20um%20orçamento!";
  phoneNumber: string = "5521980587193";
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

// Icons
import { matMenu as menu, matClose as close, matWhatsapp as whats, matArrowForwardIos as arrow } from '@ng-icons/material-icons/baseline';
import { ionLogoInstagram as insta, ionLogoYoutube as youtube } from '@ng-icons/ionicons'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  viewProviders: [provideIcons({ menu, close, whats, arrow, insta, youtube })],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  phoneNumber: number = 5521980587193;
  encodedMessage: string = "Olá! Gostaria de fazer um orçamento!"
}

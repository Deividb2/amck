import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matWhatsapp as whats, matWarningAmber } from '@ng-icons/material-icons/baseline';
import { ionLogoInstagram as insta, ionLogoYoutube as youtube } from '@ng-icons/ionicons'

@Component({
  selector: 'app-warning',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ whats, insta, youtube, matWarningAmber })],
  templateUrl: './warning.component.html',
  styleUrl: './warning.component.scss'
})
export class WarningComponent {
    message: string = "Olá,%20gostaria%20realizar%20um%20orçamento!";
    phoneNumber: string = "5521980587193";
}

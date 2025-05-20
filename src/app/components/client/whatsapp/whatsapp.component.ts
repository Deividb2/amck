import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matWhatsapp } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matWhatsapp })],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.scss'
})
export class WhatsappComponent {
  private message: string = "Olá, gostaria de fazer um orçamento!!"
  private phoneNumber: string = "5521980587193"
  private encodedMessage = encodeURIComponent(this.message)

  openWhats() {
    window.open(`https://wa.me/${this.phoneNumber}?text=${this.encodedMessage}`)
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected email: string = 'mailto:amck.suporte@gmail.com'
  private message: string = "Olá, gostaria de fazer um orçamento!!"
  protected cabinetmakerPhoneNumber: string = "5521980587193"
  protected attendantPhoneNumber: string = "5521977201714"
  private encodedMessage = encodeURIComponent(this.message)

  sendMessage(phoneNumber: string) {
    return `https://wa.me/${phoneNumber}?text=${this.encodedMessage}`
  }
}

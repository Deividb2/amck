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
  private message: string = "Olá, gostaria de fazer um orçamento!!"
  private phoneNumber: string = "5521980587193"
  private encodedMessage = encodeURIComponent(this.message)

  protected ulrFinal: string = `https://wa.me/${this.phoneNumber}?text=${this.encodedMessage}` 
  protected email: string = 'mailto:amck.suporte@gmail.com'
}

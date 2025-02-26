import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matWhatsapp as whats } from '@ng-icons/material-icons/baseline';
import { ionLogoInstagram as insta, ionLogoYoutube as youtube } from '@ng-icons/ionicons'

import { EmailService } from '../../services/email.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIcon],
  providers: [provideIcons({ whats, insta, youtube })],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private emailService: EmailService) {}

  message: string = "Olá,%20gostaria%20realizar%20um%20orçamento!";
  phoneNumber: string = "5521980587193";

  formData = { name: '', email: '', message: '' }

  sendEmail() {
    this.emailService.sendEmail(this.formData)
      .then(() => alert("Email enviado com sucesso"))
      .catch(() => alert("Erro ao enviar email"))
  }
}

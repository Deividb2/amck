import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matWhatsapp as whats } from '@ng-icons/material-icons/baseline';
import { ionLogoInstagram as insta, ionLogoYoutube as youtube } from '@ng-icons/ionicons'

import { EmailContactMessageService } from '../../../services/emails/email-contact-message.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, NgIcon, ReactiveFormsModule],
  providers: [provideIcons({ whats, insta, youtube })],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  #emailContactMessage = inject(EmailContactMessageService)
  #emailContactMessageForm = inject(FormBuilder)
  
  message: string = "Olá,%20gostaria%20realizar%20um%20orçamento!";
  phoneNumber: string = "5521980587193";

  emailContactMessageForm = this.#emailContactMessageForm.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(10)]],
    message: ['', [Validators.required, Validators.maxLength(4000)]]
  })

  sendEmail() {
    if(this.emailContactMessageForm.valid) {
      this.#emailContactMessage.submitEmailContactMessage(this.emailContactMessageForm.value)
      this.resetInput()
    }
  }

  resetInput() {
    this.emailContactMessageForm.reset()
  }
}

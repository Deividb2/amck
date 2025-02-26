import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser'

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() { }

  private serviceId: string = 'amck_planejados'
  private templateId: string = 'template_9m0i7ji'
  private publicKey: string = '75NUaIuxdp-5-s50F'

  sendEmail(formData: any): Promise<void> {
    return emailjs.send(this.serviceId, this.templateId, formData, this.publicKey)
      .then(response => {
        console.log("Email enviado com sucesso: ", response)
      }).catch(error => {
        console.log("Erro ao enviar o email: ", error)
      })
  }
}

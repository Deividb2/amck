import { Injectable } from "@angular/core";
import emailjs from "@emailjs/browser"

@Injectable({
    providedIn: 'root'
})

export class EmailBudgetService {
    #serviceId: string = "service_7t2f8oq"
    #templateId: string = "template_5aaet2c"
    #publicKey: string = "75NUaIuxdp-5-s50F"
    
    submitBudgetFormEmail(formData: any): Promise<any> {
        return emailjs.send(this.#serviceId, this.#templateId, formData, this.#publicKey)
            .then(() => alert("Email enviado com sucesso"))
            .catch((error) => {
                console.error("Erro ao enviar email: ",  error)
                alert("Erro ao enviar email")
            })
    }
}
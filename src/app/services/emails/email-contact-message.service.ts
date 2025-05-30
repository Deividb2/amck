import { Injectable } from "@angular/core";
import emailjs from "@emailjs/browser";

@Injectable({
    providedIn: 'root'
})

export class EmailContactMessageService {
    #serviceId: string = "service_682ytk3"
    #templateId: string = "template_79hl10y"
    #publicKey: string = "75NUaIuxdp-5-s50F"

    submitEmailContactMessage(formData: any): Promise<any> {
        return emailjs.send(this.#serviceId, this.#templateId, formData, this.#publicKey)
    }
}
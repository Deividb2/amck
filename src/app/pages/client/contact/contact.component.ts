import { Component } from '@angular/core';
import { ContactFormComponent } from '../../../components/client/contact-form/contact-form.component';
import { FooterComponent } from "../../../components/client/footer/footer.component";
import { WhatsappComponent } from "../../../components/client/whatsapp/whatsapp.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, FooterComponent, WhatsappComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}

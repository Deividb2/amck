import { Component } from '@angular/core';
import { ContactFormComponent } from '../../../components/client/contact-form/contact-form.component';
import { FooterComponent } from "../../../components/client/footer/footer.component";
import { WhatsappComponent } from "../../../components/client/whatsapp/whatsapp.component";
import { StagesComponent } from "../../../components/client/stages/stages.component";
import { FaqComponent } from "../../../components/client/faq/faq.component";
import { BudgetFormComponent } from "../../../components/client/budget-form/budget-form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, FooterComponent, WhatsappComponent, StagesComponent, FaqComponent, BudgetFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}

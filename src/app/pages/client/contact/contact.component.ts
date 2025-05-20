import { Component } from '@angular/core';
import { HeaderContactComponent } from "./components/header-contact/header-contact.component";
import { ContactFormComponent } from '../../../components/client/contact-form/contact-form.component';
import { FooterComponent } from "../../../components/client/footer/footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderContactComponent, ContactFormComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}

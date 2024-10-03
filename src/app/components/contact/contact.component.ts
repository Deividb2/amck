import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  phoneNumber: number = 5521980587193;
  encodedMessage: string = "Olá! Gostaria de fazer um orçamento!"
}

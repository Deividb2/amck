import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matMarkEmailUnreadOutline as sendIcon } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-message-confirmation-form',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ sendIcon })],
  templateUrl: './message-confirmation-form.component.html',
  styleUrl: './message-confirmation-form.component.scss'
})
export class MessageConfirmationFormComponent {
  #dialog = inject(Dialog)

  closeDialog() {
    this.#dialog.closeAll()
  }
}

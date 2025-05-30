import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matReportGmailerrorredOutline as errorIcon } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-message-error-form',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ errorIcon })],
  templateUrl: './message-error-form.component.html',
  styleUrl: './message-error-form.component.scss'
})
export class MessageErrorFormComponent {

  #dialog = inject(Dialog)

  closeDialog() {
    this.#dialog.closeAll()
  }
}
